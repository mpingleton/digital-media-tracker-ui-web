import React, { useState, useEffect } from 'react';
import Dialog from '../components/Dialog';

import {
    getApiContext,
} from '../api';

function DisposeMediaDialog(props) {
    return (
        <Dialog isOpen={props.isOpen} onClose={props.onClose}>
            
        </Dialog>
    );
}

export default DisposeMediaDialog;