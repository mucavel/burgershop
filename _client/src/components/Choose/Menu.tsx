const simples = require('../../assets/images/choose-1.png');
const batata_cola_burger_king = require('../../assets/images/choose-2.png');
const duplo = require('../../assets/images/choose-3.png');
const batata_tomate = require('../../assets/images/choose-4.png');
const batata_completa = require('../../assets/images/choose-5.png');
const batata_cola_burger = require('../../assets/images/choose-7.png');

export const Menu = [
    {
        id: 1,
        img : simples,
        name: 'Hambúrguer Simples',
        description: 'Hambúrguer Simples Extra Fat com recheio',
        price: '200 MT'
    },
    {
        id: 2,
        img : duplo,
        name: 'Hambúrguer Duplo',
        description: 'Hambúrguer Duplo com recheio e queijo',
        price: '240 MT'
    },
    {
        id: 3,
        img : batata_cola_burger_king ,
        name: 'Hambúrguer Duplo King',
        description: 'Hambúrguer Duplo King acompanhado de Batatas e Coca-Cola Zero',
        price: '300 MT'
    },
    {
        id: 4,
        img : batata_tomate,
        name: 'Batata Frita com Tomate',
        description: 'Batatas Fritas com recheiadas com Tomate Souce',
        price: '70 MT'
    },
    {
        id: 5,
        img : batata_cola_burger,
        name: 'Hambúrguer Duplo Acompanhado',
        description: 'Hambúrguer Duplo Acompanhado com Batatas e Coca-Cola',
        price: '280 MT'
    },
    {
        id: 6,
        img : batata_completa,
        name: 'Batata, Tomate e Mayonaise',
        description: 'Batatas Fritas acompanhadas duma porção de Tomate Souce e Mayonaise',
        price: '90 MT'
    }
    
]