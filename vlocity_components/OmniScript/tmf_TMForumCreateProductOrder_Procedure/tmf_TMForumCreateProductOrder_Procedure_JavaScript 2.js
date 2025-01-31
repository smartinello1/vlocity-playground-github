{"@type":"ProductOrder","category":"B2C product order","channel":[{"id":"1","name":"Online chanel","role":"Used channel for order capture"}],"description":"Product Order illustration sample","externalId":"PO-456","note":[{"author":"Jean Pontus","date":"2019-04-30T08:13:59.509Z","id":"1","text":"This is a TMF product order illustration"}],"priority":"1","productOrderItem":[{"@type":"ProductOrderItem","action":"add","id":"205ccd31-5934-766e-848f-0bff644e6338","itemPrice":[{"description":"Access Fee","name":"Access Fee","price":{"dutyFreeAmount":{"unit":"EUR","value":0.99},"taxIncludedAmount":{"unit":"EUT","value":0.99},"taxRate":0},"priceAlteration":[{"applicationDuration":3,"description":"20% for first 3 months","name":"WelcomeDiscount","price":{"@type":"price","absolute":2,"taxRate":0},"priceType":"onetime","priority":1,"recurringChargePeriod":"month"}],"priceType":"nonRecurring"}],"payment":[{"@referredType":"Payment","@type":"CashPayment","href":"https://host:port/paymentManagement/v4/cashPayment/2365","id":"2365","name":"Cash payment for access fee"}],"product":{"@type":"Product","isBundle":false,"productCharacteristic":[{"name":"VEPC_ATTR_CPE_DELIVERY_OPTION","value":"shipping","valueType":"string"}],"productSpecification":{"@type":"ProductSpecificationRef","href":"https://host:port/productCatalogManagement/v4/productSpecification/14307","id":"14307","name":"Mobile Telephony","version":"1"}},"productOffering":{"href":"https://host:port/productCatalogManagement/v4/productOffering/14305","id":"14305","name":"TMF Mobile Telephony"},"quantity":1}],"relatedParty":[{"@referredType":"account","@type":"RelatedParty","href":"https://host:port/partyManagement/v4/individual/456-dd-df45","id":"CD451791","name":"Test Sh1","role":""},{"@referredType":"Customer","@type":"RelatedParty","href":"https://host:port/partyRoleManagement/v4/customer/ff55-hjy4","id":"ff55-hjy4","name":"Jean Pontus"}],"requestedCompletionDate":"2019-05-02T08:13:59.506Z","requestedStartDate":"2019-05-03T08:13:59.506Z"}