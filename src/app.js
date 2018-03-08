"use strict"

import React from 'react';  
import ReactDOM from 'react-dom';
import VRScene from './VRScene';

import {contract, Contract} from './Contract';

contract.createRandomFountain("test");

const App = () => (
	<VRScene/>
)

const destination = document.getElementById("app");

ReactDOM.render( <VRScene />, destination );

