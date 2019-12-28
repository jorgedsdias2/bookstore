import React, { useState, useEffect } from 'react';

export default function EditAuthorForm(props) {
    const [author, setAuthor] = useState(props.currentAuthor);

    useEffect(() => {
        setAuthor(props.currentAuthor);
    }, [props]);

    function handleInputChange(e) {
        const {name, value} = e.target;

        setAuthor({...author, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.updateAuthor(author._id, author);
        document.querySelector("#editAuthor .close").click();
    }

    return (
        <>
            <div className="modal fade" id="editAuthor" tabIndex="-1" role="dialog" aria-labelledby="editAuthor" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editAuthor">Edit Author</h5>
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
                                        placeholder="Name"
                                        value={author.name || ''}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                                <button className="btn btn-primary" type="submit">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}