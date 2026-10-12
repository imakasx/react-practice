import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {Controller} from "react-hook-form";

function RTE({name, control, label , defaultValue=" "}) {
    return (
        <div className='w-full'>
            {label && <label className='block text-sm font-medium text-gray-700 mb-1'>
                {label}</label>}

                <Controller/>
        </div>
    )
}
export default RTE;