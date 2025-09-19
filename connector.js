/*
 * Copyright © 2025 [Avelanda]
 * All rights reserved 
 */

 function State(){
  
  function CoreState(){
   const fs = require('fs');
   const path = require("path");

   module.exports = function (RED) {
    const flow = fs.readFileSync(path.join(__dirname, "subflow.json"));
    RED.nodes.registerSubflow(JSON.parse(flow));
   }
  } CoreState();
  
  for (CoreState == null; CoreState != undefined; CoreState){
      return CoreState();
  }
 
 }
  State();  
