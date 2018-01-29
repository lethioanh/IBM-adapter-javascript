/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2016. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/**
 * @param tag: a topic such as MobileFirst_Platform, Bluemix, Cordova.
 * @returns json list of items.

 */


function showLoca(location) {
  var input = {
    method : 'get',
    path : '/data/2.5/weather',
    returnedContentType : 'json',
    parameters: {
      "appid": "b6907d289e10d714a6e88b30761fae22",
      "id": '2172797'
    }
  };
  var response = MFP.Server.invokeHttp(input);
  return { result: response };
}
