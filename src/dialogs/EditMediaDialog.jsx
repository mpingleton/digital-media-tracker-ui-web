import React, { useState, useEffect } from 'react';
import Dialog from '../components/Dialog';

import {
    getApiContext,
} from '../api';

function EditMediaDialog(props) {
    return (
        <Dialog isOpen={props.isOpen} onClose={props.onClose}>
            
        </Dialog>
    );
}

export default EditMediaDialog;