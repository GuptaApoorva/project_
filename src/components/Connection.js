import React from "react";

const Connection =() =>{
    return(
        <div>
            
            <div class="d-flex p-2">
            <div className="container-sm">
                <div class="d-flex p-2" id="head" >CONNECTION DETAILS</div>
                <form>
                    <div class="d-flex mb-3">
                        <div class="p-2">
                            <input type="checkbox" id="permanent" name="permanent" value="Permanent"/>
                            <label for="permanent"> Permanent</label><br/>
                        </div>
                        <div class="p-2">
                            <input type="checkbox" id="temp" name="temp" value="Temporary"/>
                            <label for="temp"> Temporary</label><br/>
                        </div>
                    </div>
                    <div class="p-2">
                        <div class="col-md-6">
                            <label for="title" class="form-label">Category of electricity usage </label>
                            <select class="form-select" id="title" required>
                                <option selected disabled value="">Select...</option>
                                <option>Domestic</option>
                                <option>Non domestic</option>
                                <option>Industrial</option>
                                <option>Agriculture</option>
                                <option>Mushrooms</option>
                                <option>Public Utility</option>
                                <option>Charging station e-vehical</option>
                                <option>DJB</option>
                                <option>DIAL</option>
                                <option>DMRC</option>
                                <option>Railway Traction</option>
                                <option>Adevertising</option>
                            </select>
                        <div class="invalid-feedback">
                        Please select a valid Title.
                        </div>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="p-2">
                            <div class="col-md-12">
                                    <label for="validationName" class="form-label">Load (KVA) (1 KVA = 0.93 KW)</label>
                                    <input type="text" class="form-control" id="validationName"/>
                            </div>
                            </div>
                            <div class="p-2">
                                <div class="col-md-12">
                                    <label for="validationDefault02" class="form-label">Load (KW)</label>
                                    <input type="text" class="form-control" id="validationDefault02" />
                                </div>
                            </div>
                            <div class="p-2">
                                <div class="col-md-12">
                                    <label for="validationDefault02" class="form-label">Purpose of Supply</label>
                                    <input type="text" class="form-control" id="validationDefault02" />
                                </div>
                            </div>
                    </div>
                    <div class="d-flex mb-3">
                            <div class="p-2">
                            <div class="col-md-12">
                                <label for="validationDefault04" class="form-label">Type of Area</label>
                                <select class="form-select" id="validationDefault04" required>
                                <option selected disabled value="">Choose...</option>
                                <option>JJ Cluster</option>
                                <option>other</option>
                                </select>
                            </div>
                            </div>
                            <div class="p-2">
                                <div class="col-md-12">
                                    <label for="validationDefault04" class="form-label">Type of Premises</label>
                                    <select class="form-select" id="validationDefault04" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>Owned</option>
                                    <option>Rented/Leased</option>
                                    <option>Others</option>
                                    </select>
                                </div>
                            </div>
                            <div class="p-2">
                            <div class="col-md-12">
                                    <label for="validationDefault04" class="form-label">Type of Use/Building</label>
                                    <select class="form-select" id="validationDefault04" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>Residential Building</option>
                                    <option>Hotel/Guest House</option>
                                    <option>Institutional Building</option>
                                    <otion>Business Building</otion>
                                    <otion>others</otion>
                                    </select>
                                </div>
                            </div>
                        </div>
                </form>
                
            </div>
            </div>     
        </div>
    );
}

export default Connection;