create table dim_conta_cliente as
select c.cod_cliente , c.cod_agencia , c.saldo_total , a.nome, a.cidade, a.tipo_agencia 
from contas c 
inner join agencias a 
on c.cod_agencia = a.cod_agencia 

create table dim_clientes_propostas_credito as
select pc.cod_proposta, c.cod_cliente, c.data_nascimento, c.endereco, pc.cod_colaborador, pc.valor_financiamento, pc.status_proposta
from clientes c 
inner join propostas_credito pc 
on c.cod_cliente  = pc.cod_cliente 