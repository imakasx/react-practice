import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import {Controller} from "react-hook-form";

function RTE({name, control, label , defaultValue=" "}) {
    return (
        <div className='w-full'>
            {label && <label className='block text-sm font-medium text-gray-700 mb-1'>
                {label}</label>}

                <Controller
                name={name || "content"}
                control={control}
                render={({ field:{onChange} }) => (
                    <Editor
                        initialValue={defaultValue}
                        init={{
                            initialValue: defaultValue,
                            height: 500,
                            menubar: true,
                            plugins: [
                                        "image",
                                        "advlist",
                                        "autolink",
                                        "lists",
                                        "link",
                                        "image",
                                        "charmap",
                                        "preview",
                                        "anchor",
                                        "searchreplace",
                                        "visualblocks",
                                        "code",
                                        "fullscreen",
                                        "insertdatetime",
                                        "media",
                                        "table",
                                        "code",
                                        "help",
                                        "wordcount",
                                        "anchor",
                                    ],
                                    toolbar:
                                    ""
                        }}
                        onEditorChange={onChange}
                    />
                )}
                />
        </div>
    )
}
export default RTE;