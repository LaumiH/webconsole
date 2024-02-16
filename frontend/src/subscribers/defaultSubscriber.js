let defaultSubscriber = {
  supi: '208930000000001',
  plmnId: '20893',
  mcc: '208',
  mnc: '93',
  msin: 1,
  msisdn: '',

  authMethod: '5G_AKA',
  key: '8baf473f2f8fd09487cccbd7097c6862',
  amf: '8000',
  sqn: '0',
  opCode: '8e27b6af0e692e750f32667a3b14605d',
  opCodeType: 'OP',
  slices: [
    {
      sst: 1,
      sd: '010203',
      isDefault: true,
      dnns: [
        {
          name: 'internet',
          uplinkAmbr: '1 Tbps',
          downlinkAmbr: '1 Tbps',
          default5qi: 2,
          upSecurity: false,
          flows: [
            {
              filter: '',
              precedence: 120,
              fiveQi: 5,
              gbrUL: '1 Tbps',
              gbrDL: '1 Tbps',
              mbrUL: '1 Tbps',
              mbrDL: '1 Tbps'
            }
          ]
        }
      ],
    },
    /*{
      sst: 2,
      sd: '112233',
      isDefault: true,
      dnns: [
        {
          name: 'internet2',
          uplinkAmbr: '1 Kbps',
          downlinkAmbr: '1 Kbps',
          default5qi: 10,
          flows: [
            {
              filter: 'hi',
              precedence: 127,
              fiveQi: 11,
              gbrUL: '2 Tbps',
              gbrDL: '2 Tbps',
              mbrUL: '2 Tbps',
              mbrDL: '2 Tbps'
            }
          ]
        }
      ],
    }*/
  ]
};

export { defaultSubscriber };
