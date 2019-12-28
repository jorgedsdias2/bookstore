import React, { useState } from 'react';

export default function AddAuthorForm(props) {
    const initialFormState = { name: '' };
    const [author, setAuthor] = useState(initialFormState);

    function handleInputChange(e) {
        const {name, value} = e.target;

        setAuthor({...author, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addAuthor(author);
        setAuthor(initialFormState);
        document.querySelector("#addAuthor .close").click();
    }

    return (
        <>
            <div className="modal fade" id="addAuthor" tabIndex="-1" role="dialog" aria-labelledby="addAuthor" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addAuthor">Add Author</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <form className="user" onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <input
                                        className="form-control form-control-user"
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Name *"
                                        value={author.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <button className="btn btn-primary" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}