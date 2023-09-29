using { API_SALES_ORDER_SRV as salesOrder } from './external/API_SALES_ORDER_SRV';
service sampleCap{
    entity A_SalesOrder_entity as SELECT from salesOrder.A_SalesOrder
    {SalesOrder,SalesOrderType,CreationDate,TotalNetAmount};
}