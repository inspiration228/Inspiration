// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

(function() {
"use strict";
  
  module.exports = {
  
    // Replace with your own subscription key, service region (e.g., "westus"),
    // and recognition language.
    subscriptionKey:   "3e993604d9ec46f6996f011bc01824b6",
    serviceRegion:     "eastus", // e.g., "westus"
    language:          "en-US",
  
    // Replace with the full path to a wav file you want to recognize or overwrite.
    filename:          "YourAudioFile.wav", // 16000 Hz, Mono
  
    // Replace with your own Language Understanding subscription key (endpoint
    // key), region, and app ID in case you want to run the intent sample.
    luSubscriptionKey: "3e993604d9ec46f6996f011bc01824b6",
    luServiceRegion:   "eastus",
    luAppId:           "YourLanguageUnderstandingAppId",
  };
  }());
    
