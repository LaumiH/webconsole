let defaultSubscriber = {
  supi: '208930000000001', //'001010000000001',
  plmnId: '20893',
  mcc: '208',
  mnc: '93',
  msin: 1,
  msisdn: '',
  multisubs: false,
  userNumber: 1,

  authMethod: '5G_AKA',
  key: '8baf473f2f8fd09487cccbd7097c6862', //'00112233445566778899AABBCCDDEEFE',
  amf: '8000',
  sqn: '0',
  opCode: '8e27b6af0e692e750f32667a3b14605d', //'000102030405060708090A0B0C0D0E0F',
  opCodeType: 'OP',
  slices: [
    {
      sst: 1,
      sd: '010203',
      isDefault: true,
      dnns: [
        {
          name: 'internet',
          checkStaticIPv4: false,
          staticIPv4: '',
          uplinkAmbr: '1 Tbps',
          downlinkAmbr: '1 Tbps',
          default5qi: 2,
          upSecurity: false,
          flows: [
            //{
            //  filter: 'permit out ip from any to 10.60.0.0/16',
            //  precedence: 120,
            //  fiveQi: 5,
            //  gbrUL: '1 Tbps',
            //  gbrDL: '1 Tbps',
            //  mbrUL: '1 Tbps',
            //  mbrDL: '1 Tbps'
            //}
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
          checkStaticIPv4: false,
          staticIPv4: '',
          uplinkAmbr: '1 Kbps',
          downlinkAmbr: '1 Kbps',
          default5qi: 10,
          flows: [
            {
              filter: '',
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
