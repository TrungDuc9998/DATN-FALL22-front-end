import {
  Unlock,
  Lock,
  Edit,
  Plus,
  Search,
  RefreshCw,
  XCircle,
  Eye
} from "react-feather";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size;
}

function Category() {
  const [width, setWidth] = useState(window.innerWidth);
  const [a, setA] = useState("20px");
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);

      if (window.innerWidth > 1000) {
        console.log("lớn");
        setA("340px");
        console.log(a);
      } else {
        console.log("nhỏ");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="" style={{ marginRight: "20px", marginLeft: a }}>
      <h3 className="mt-4">Danh sách thể loại</h3>
      <div className="card mt-3">
        <form className="mt-3 mb-3">
          <div className="row">
            <div className="col-4">
              <div className="form-group">
                <label style={{ marginLeft: "20px" }}>Tên thể loại</label>
                <input
                  className="form-control"
                  style={{ marginLeft: "20px" }}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label>Trạng thái</label>
                <select className="form-select">
                    <option>Hoạt động</option>
                    <option>Không hoạt động</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mt-3 ">
              <button className="btn btn-outline-primary">
                <RefreshCw /> Đặt lại
              </button>
              <button className="btn btn-primary mx-2">
                <Search /> Tìm kiếm
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="row mt-3 offset-11">
        <div className="col-12 text-center">
          <Button variant="primary" onClick={handleShow}>
            <Plus />
            Thêm
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Tạo mới</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="form-group">
                  <label>Tên thể loại</label>
                  <input className="form-control" />
                </div>
                <div className="form-group">
                  <label>Ghi chú</label>
                  <textarea className="form-control" cols={20}></textarea>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Đóng
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Lưu
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div className="card mt-3">
        <table className="table table-striped table-hover ">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên thể loại</th>
              <th>Thời gian tạo</th>
              <th>Người tạo</th>
              <th>Trạng thái</th>
              <th colSpan={4}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Laptop Gamming</td>
              <td>03/10/2022</td>
              <td>Admin</td>
              <td>
                <div
                  className="text-center text-light fw-bold"
                  style={{ borderRadius: "5px", background: "rgb(0,182,155)" }}
                >
                  <p className="pt-2 pb-2">Hoạt động</p>
                </div>
              </td>
              <td>
                <button className="btn btn-outline-dark">
                  <Eye size={20} />
                </button>
              </td>
              <td>
                <button className="btn btn-primary">
                  <Edit size={20} />
                </button>
              </td>
              <td>
                <button className="btn btn-outline-danger">
                  <XCircle size={20} />
                </button>
              </td>
              <td>
                <button className="btn btn-outline-dark">
                  <Unlock size={20} />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Laptop Gamming</td>
              <td>03/10/2022</td>
              <td>Admin</td>
              <td>
                <div
                  className="text-center text-light fw-bold"
                  style={{ borderRadius: "5px", background: "rgb(0,182,155)" }}
                >
                  <p className="pt-2 pb-2">Hoạt động</p>
                </div>
              </td>
              <td>
                <button className="btn btn-outline-dark">
                  <Eye size={20} />
                </button>
              </td>
              <td>
                <button className="btn btn-primary">
                  <Edit size={20} />
                </button>
              </td>
              <td>
                <button className="btn btn-outline-danger">
                  <XCircle size={20} />
                </button>
              </td>
              <td>
                <button className="btn btn-outline-dark">
                  <Lock size={20} />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Laptop Gamming</td>
              <td>03/10/2022</td>
              <td>Admin</td>
              <td>
                <div
                  className="text-center text-light fw-bold"
                  style={{ borderRadius: "5px", background: "rgb(0,182,155)" }}
                >
                  <p className="pt-2 pb-2">Hoạt động</p>
                </div>
              </td>
              <td>
                <button className="btn btn-outline-dark">
                  <Eye size={20} />
                </button>
              </td>
              <td>
                <button className="btn btn-primary">
                  <Edit size={20} />
                </button>
              </td>
              <td>
                <button className="btn btn-outline-danger">
                  <XCircle size={20} />
                </button>
              </td>
              <td>
                <button className="btn btn-outline-dark">
                  <Lock size={20} />
                </button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Laptop Gamming</td>
              <td>03/10/2022</td>
              <td>Admin</td>
              <td>
                <div
                  className="text-center text-light fw-bold"
                  style={{ borderRadius: "5px", background: "rgb(0,182,155)" }}
                >
                  <p className="pt-2 pb-2">Hoạt động</p>
                </div>
              </td>
              <td>
                <button className="btn btn-outline-dark">
                  <Eye size={20} />
                </button>
              </td>
              <td>
                <button className="btn btn-primary">
                  <Edit size={20} />
                </button>
              </td>
              <td>
                <button className="btn btn-outline-danger">
                  <XCircle size={20} />
                </button>
              </td>
              <td>
                <button className="btn btn-outline-dark">
                  <Lock size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Category;
