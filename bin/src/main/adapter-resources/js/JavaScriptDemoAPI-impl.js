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

function getFeed(tag) {
  var input = {
      method : 'get',
      data: tag
  };

  return MFP.Server.invokeHttp(input);
}


/**
 * @returns ok
 */
function unprotected(param) {
  var input = param + "Hello from unprotected resource";
  return {result : input };
}
