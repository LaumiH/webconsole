import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Button, Table } from 'react-bootstrap';

import { subscribersActions } from '../_store';
import { SubscriberModal } from './SubscriberModal';
import { InfoHeader } from '../_components/InfoHeader';

export { Subscribers };

function Subscribers() {
  const dispatch = useDispatch();
  const { subscribers, error } = useSelector(x => x.subscribers);

  // manage the currently displayed subscriber
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  const [newSubscriber, setNewSubscriber] = useState(false);
  const [duplicateSubscriber, setDuplicateSubscriber] = useState(false);
  const [modalAction, setModalAction] = useState(null);

  //const [showStaticIPs, setShowStaticIPs] = useState(false);
  //const toggleShowStaticIPs = () => setShowStaticIPs(!showStaticIPs);

  //const renderCounter = useRef(0);

  const handleNew = () => {
    // set the action that is passed to the modal
    // aka what happends when user clicks 'submit'

    setModalAction(() => function (subscriberData) {
      //post new subscriber and get updated subscribers list afterwards
      dispatch(subscribersActions.createSubscriberById(subscriberData)).then(() => {
        dispatch(subscribersActions.getAllSubscribers())
      });
    });

    setNewSubscriber(true);
    setDuplicateSubscriber(false);
    toggleModal();
  };

  //const handleShowStaticIPs = () => {
  //  toggleShowStaticIPs();
  //}

  const handleDelete = ({ supi, plmnId }) => {
    if (!window.confirm(`Delete subscriber ${plmnId}--${supi}?`))
      return;

    // call delete async and get updated subscribers list afterwards
    dispatch(subscribersActions.deleteSubscriberById({ supi, plmnId })).then(() => {
      dispatch(subscribersActions.getAllSubscribers())
    });
  };

  const handleModify = ({ supi, plmnId }) => {
    // fetch the data, but leave it to the Modal to read it as it is async
    dispatch(subscribersActions.getSubscriberById({ supi, plmnId }));

    // set the action that is passed to the modal
    // aka what happends when user clicks 'submit'
    setModalAction(() => function (subscriberData) {
      dispatch(subscribersActions.updateSubscriberById(subscriberData));
    });

    setNewSubscriber(false);
    setDuplicateSubscriber(false);
    toggleModal();
  };

  const handleDuplicate = ({ supi, plmnId }) => {
    // fetch the data, but leave it to the Modal to read it as it is async
    dispatch(subscribersActions.getSubscriberById({ supi, plmnId }));

    setModalAction(() => function (subscriberData) {
      dispatch(subscribersActions.createSubscriberById(subscriberData)).then(() => {
        dispatch(subscribersActions.getAllSubscribers())
      });
    });

    setNewSubscriber(true);
    setDuplicateSubscriber(true);
    toggleModal();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            {/*<p>Rerenders: {renderCounter.current = renderCounter.current + 1}</p>*/}

            <InfoHeader headline="Subscribers" refreshAction={() => subscribersActions.getAllSubscribers()} />

            {error && <div className="text-danger" style={{ marginLeft: '30px', paddingBottom: '30px' }}>Error in subscriber action: {error.message}</div>}

            {error && console.log(error)}

            <div style={{ display: 'flex', float: 'right', flexDirection: 'row' }}>
              <Button variant="primary"
                style={{ marginLeft: '30px', width: '130px' }}
                onClick={handleNew}>
                New Subscriber
              </Button>

              {/*<Button variant="primary"
                style={{ marginLeft: '30px', width: '210px' }}
                onClick={handleShowStaticIPs}>
                {showStaticIPs ? 'Show' : 'Hide'} Static UE IP Addresses
              </Button>*/}
            </div>

            <div className="content subscribers__content">
              {subscribers.length &&
                <Table className="subscribers__table" striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>PLMN ID</th>
                      <th>SUPI</th>
                      <th>MSISDN</th>
                      {/*<th hidden={showStaticIPs}>Static IPs</th>*/}
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((subscriber, index) => {
                      return (
                        <tr key={subscriber.supi}>
                          <td>{index + 1}</td>
                          <td>{subscriber.plmnId}</td>
                          <td>{subscriber.supi}</td>
                          <td>{subscriber.msisdn === '' ? '-' : subscriber.msisdn}</td>
                          {/*<td hidden={showStaticIPs}><StaticIPsDisplay subscriber={subscriber} slices={subscriber.slices}/></td>*/}
                          <td style={{ textAlign: 'left' }}>
                            <Button variant="primary" style={{ marginRight: '10px' }} onClick={() => handleModify({ supi: subscriber.supi, plmnId: subscriber.plmnId })} >Modify/ Show</Button>
                            <Button variant="info" style={{ marginRight: '10px' }} onClick={() => handleDuplicate({ supi: subscriber.supi, plmnId: subscriber.plmnId })}>Duplicate</Button>
                            <Button variant="danger" onClick={() => handleDelete({ supi: subscriber.supi, plmnId: subscriber.plmnId })} >Delete</Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              }
              {/*subscribers.loading && <div className="spinner-border spinner-border-sm"></div>*/}
              {subscribers.info &&
                <div className="text-info">Info: {subscribers.info.message}</div>
              }
              {subscribers.error &&
                <div className="text-danger">Error loading subscribers: {subscribers.error.message}</div>
              }
            </div>
            {subscribers?.length > 10 &&
              //second button for convenience if list is long (no scrolling to top)
              <Button variant="primary"
                style={{ marginLeft: '30px', width: '130px' }}
                onClick={handleNew}>
                New Subscriber
              </Button>
            }
          </div>
        </div>
      </div>
      <SubscriberModal
        show={showModal}
        newSubscriber={newSubscriber}
        duplicateSubscriber={duplicateSubscriber}
        submitAction={modalAction}
        handleClose={toggleModal}
      />
    </div>
  );
};
