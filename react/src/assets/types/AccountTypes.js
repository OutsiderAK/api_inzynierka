import React from 'react';

export interface AccountResponse {
    user: {
      id: string;
      username: string;
      email: string;
      is_active: boolean;
      created: Date;
      updated: Date;
    };
    access: string;
    refresh: string;
  }

