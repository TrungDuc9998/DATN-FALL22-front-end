import {RefreshCw,Search} from "react-feather"
function Statistical() {
  return (
    <div className="ms-4 mx-4 mt-4">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-4">
              <form>
                <label>Tìm kiếm</label>
                <input className="form-control"/>
              </form>
            </div>
            <div className="col-4">
              <form>
                <label>Lọc theo ngày</label>
                <select className="form-select">
                  <option>a</option>
                  <option>b</option>
                  <option>c</option>
                </select>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center mt-3 ">
              <button className="btn btn-outline-secondary">
                <RefreshCw /> Đặt lại
              </button>
              <button className="btn btn-primary mx-2">
                <Search /> Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">
          <button className="btn btn-success">Xuất excel</button>
        </div>
        <div className="card-body">
          <div className="row">
            <table className="table">
              <thead>
                <tr>
                  <th> STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Thời gian</th>
                  <th>Số lượng đơn đặt</th>
                  <th>Số lượng huỷ</th>
                  <th>Số lượng bán thành công</th>
                  <th>Tổng tiền</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Laptop G3 3500 </td>
                  <td>02/10/2022</td>
                  <td>100</td>
                  <td>30</td>
                  <td>70</td>
                  <td>300.000.000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Laptop G3 3500 </td>
                  <td>02/10/2022</td>
                  <td>100</td>
                  <td>30</td>
                  <td>70</td>
                  <td>300.000.000</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Laptop G3 3500 </td>
                  <td>02/10/2022</td>
                  <td>100</td>
                  <td>30</td>
                  <td>70</td>
                  <td>300.000.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistical;
