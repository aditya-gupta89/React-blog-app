import React from 'react'

const Contact = () => {
  return (
    <div className="container my-4">
    <h2>Contact Us</h2>
    <form>
        <div class="form-group my-2">
            <label for="exampleFormControlInput1">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="form-group my-2">
            <label for="exampleFormControlSelect1">Select your Query</label>
            <select className="form-control" id="exampleFormControlSelect1">
                <option>Web</option>
                <option>Tech Stack</option>
                <option>Technology</option>
                <option>Others</option>
            </select>
        </div>
        <div className="form-group row my-2">
            <div className="col-sm-2">Are you a Member?</div>
            <div className="col-sm-10">
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label" for="gridCheck1">
                        Yes
                    </label>
                </div>
            </div>
        </div>
        <div className="form-group row my-2">
            <div className="col-sm-2">Are you a Professor?</div>
            <div className="col-sm-10">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck2"/>
                    <label className="form-check-label" for="gridCheck2">
                        Yes
                    </label>
                </div>
            </div>
        </div>
        <div className="form-group row my-2">
            <div className="col-sm-2">Are you a Coder?</div>
            <div className="col-sm-10">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck3"/>
                    <label className="form-check-label" for="gridCheck3">
                        Yes
                    </label>
                </div>
            </div>
        </div>

        <div className="form-group my-2">
            <label for="exampleFormControlTextarea1">Tell us about yourself</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <div className="form-group my-2">
            <label for="exampleFormControlTextarea2">Elaborate Your Concern</label>
            <textarea className="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
        </div>
        <button className="btn btn-primary my-2">Submit</button>
    </form>

</div>
  )
}

export default Contact
