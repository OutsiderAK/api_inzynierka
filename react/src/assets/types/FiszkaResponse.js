import React from 'react';

export interface FiszkaResponse {
    user: {
      id: string;
      text: string;
      reverse: string;
      created: Date;
      updated: Date;
    };
   
  }

