import React from "react";
import { Image, Table } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import imageBanner from "../image/toeic_luu_y.png";
import imgNotExam from "../image/imgNotExam.png"
import Column from "antd/es/table/Column";
function PageShowListExam() {
    const location = useLocation();
    const navigate = useNavigate();

    const data = location.state
    //   console.log("Danh sach cac du lieu la : ", data?.length);
     

    return (
        <div className="mx-auto max-w-screen-lg ">
            {data?.length > 0 && (
                <>
                    {/* <Image
                        src={imageBanner}
                        width={1400}
                        height={"80vh"}
                        preview={false}
                        className=" object-cover h-[80vh]"
                    /> */}
                    <h2 className="text-center font-semibold text-2xl my-5 text-amber-500">
                        Danh sách các bài thi
                    </h2>
                    <Table dataSource={data} className="text-center mx-2">
                        <Column
                            title={<div className="text-center">Tên bài thi</div>}
                            dataIndex="name"
                            key="name"
                            className="text-center"
                        />
                        <Column
                            title={<div className="text-center">Dạng bài thi</div>}
                            dataIndex="type"
                            key="type"
                            className="text-center"
                        />
                        {/* <Column
                            title={<div className="text-center">Thời gian thi</div>}
                            dataIndex="timeExam"
                            key="timeExam"
                            className="text-center"
                        /> */}

                        <Column
                            title={<div className="text-center">Action</div>}
                            key="action"
                            render={(_, record) => (
                                <h2
                                    // onClick={() => navigate(`/exam/${record.id}`, { state: record.timeExam })}
                                    onClick={() => navigate(`/beforeExam/${record.id}`)}
                                    className="flex justify-center font-normal text-[#fb9400] hover:cursor-pointer"
                                >
                                    Thi thử
                                </h2>
                            )}
                        />
                    </Table>
                </>
            )}
            {data?.length === 0 && (
                <div className="mx-auto justify-center">
                    <img className="py-6 mx-auto justify-center" src={imgNotExam}/>
                    <h2 className="text-[#fb9600] text-center">
                    {/* <h2 className="text-[#f3c374] text-center"> */}
                        Không có bài thi nào phù hợp{" "}
                        <br />

                        Hãy <Link className="text-[#ff735e]">mua khóa học </Link> để được hưởng các ưu đãi đặc biệt
                    </h2>
                </div>
            )}

            {/* {!data?.length && (
                <div className="bg-current h-[200px]">
                    <h2 className="text-orange-500 text-2xl font-medium text-center">
                        Không có bài thi nào phù hợp{" "}
                        <br />

                        Hãy <Link>mua khóa học </Link> để được hưởng các ưu đãi đặc biệt
                    </h2>
                </div>
            )} */}
        </div>
    );
}

export default PageShowListExam;