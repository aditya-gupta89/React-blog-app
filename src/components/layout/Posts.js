import React from "react";
import logo1 from "../../img/code5.jpg";
import logo2 from "../../img/code6.jpg";
import logo3 from "../../img/code7.jpg";
import logo4 from "../../img/code8.jpg";
const Posts = () => {
  return (
    <div className="container my-4">
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                Technology
              </strong>
              <h3 className="mb-0">Artificial Intelligence</h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">
                Artificial intelligence (AI) refers to the simulation of human
                intelligence in machines that are programmed to think like
                humans and mimic their actions. The term may also be applied to
                any machine that exhibits traits associated with a human mind
                such as learning and problem-solving.{" "}
              </p>
              <a href="#" class="stretched-link">
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src={logo1} className="imge" alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">
                Technology
              </strong>
              <h3 className="mb-0">Deep Learning</h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="mb-auto">
                Deep Learning is a subfield of machine learning concerned with
                algorithms inspired by the structure and function of the brain
                called artificial neural networks. If you are just starting out
                in the field of deep learning or you had some experience with
                neural networks some time ago
              </p>
              <a href="#" class="stretched-link">
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src={logo2} className="imge" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                Technology
              </strong>
              <h3 className="mb-0">Web Development</h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">
                Web development refers to the building, creating, and
                maintaining of websites. It includes aspects such as web design,
                web publishing, web programming, and database management. It is
                the creation of an application that works over the internet i.e.
                websites
              </p>
              <a href="#" class="stretched-link">
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src={logo3} className="imge" alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">
                Technology
              </strong>
              <h3 className="mb-0">Android Development</h3>
              <div className="mb-1 text-muted">Nov 11</div>
              <p className="mb-auto">
                Android is an open source and Linux-based operating system for
                mobile devices such as smartphones and tablet computers. Android
                was developed by the Open Handset Alliance, led by Google, and
                other companies. This tutorial will teach you basic Android
                programming 
              </p>
              <a href="#" class="stretched-link">
                Continue reading
              </a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img src={logo4} className="imge" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
