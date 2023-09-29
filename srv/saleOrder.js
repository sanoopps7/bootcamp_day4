const cds = require('@sap/cds');
module.exports = cds.service.impl(async function(){

    const {A_SalesOrder_entity} = this.entities;
    const sampleService = await cds.connect.to("API_SALES_ORDER_SRV");

    this.on('READ', A_SalesOrder_entity, async (req,res) => {
        const dataOut = await sampleService.tx(req).run(req.query);
        return dataOut;
    })
});