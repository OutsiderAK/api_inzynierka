import React from 'react';

export interface RegisterResponse {
    user: {
        id: string;
        username: string;
        is_active: boolean;
    };
        refresh: string;
        token: string;
        
  }

