let jsonAPIs = {
    classAPI: {
        'API THEO USER': {
            1: {
                APINAME: 'List username',

                NOTE: `
                    Upload file lên hệ thống MPS
                    - Nếu upload từ server dự án, có thể upload sử dụng secret key.
                    - Nếu upload từ client, có thể sử dụng policy signature.
                    - Hiện hệ thống giới hạn dung lượng file tối đa là 8GB.
                `,

                ENDPOINT: ` POST <API_ENDPOINT>/_/upload `,

                PARAMETER: [
                    ['filename', 'Có', 'String', 'Payload', 'Tên file muốn upload'],
                    ['secret_key', 'Có(nếu không sử dụng policy)', 'signature', 'String', 'Payload', 'Secret key của namespace'],
                    ['source', '    Có(nếu không sử dụng filedata)', 'String', 'Payload', 'URL của file muốn upload'],
                ],

                RETURNED: {
                    TRUE: `
                        {
                            "status": "OK",
                            "file_path": filename,
                            "estimate_time": convert_time
                        }
                    `,

                    FALSE: `
                        {
                            "upload_error_mã lỗi": "mô tả lỗi"
                        }
                    `,
                },

                LISTERROR: [
                    ['upload_error_001', 'Unauthorized'],
                    ['upload_error_002', 'The policy document must be in JSON format'],
                    ['upload_error_003', 'Invalid policy'],
                    ['upload_error_004', 'Invalid signature'],
                    ['upload_error_005', 'Missing expires'],
                ],

                DEMO: {
                    NAME: 'Ví dụ upload bằng secret key',
                    CONNET: `
                        curl https://mps.mediacdn.vn/_/upload
                        -F convert=true
                        -F filename=example/test-trieulv.mp4
                        -F secret_key=20f7813d98b5fd9cfcb86df3065c27dc
                        -F filedata=@test.mp4
                    `,
                    NOTE: `
                        expires : policy document này có tác dụng đến Tue, 1 May 2012 03:14:07 GMT, expires tốt nhất nên để chênh lên khoảng 15-60 phút so với thời điểm tạo, sau khoảng thời gian này, server sẽ báo lỗi
                        namespace: account name (cấp cùng secret_key)
                        filename: lưu file upload với tên test.jpg (không quan tâm đến tên file gốc) (trường hợp này filename không bao gồm thư mục như đã nói ở trên)
                        directory: lưu file vào thư mục ”2012/11/10”
                        redirect: nếu up thành công sẽ redirect user đến url này
                        content-length-range: dung lượng file up ngoài khoảng 2KB đến 20MB sẽ báo lỗi
                        content-type: bắt đầu với ”image/” (file ảnh)
                    `
                }

            },

            2: {
                APINAME: 'Report theo user',

                NOTE: `
                    Upload file lên hệ thống MPS
                    - Nếu upload từ server dự án, có thể upload sử dụng secret key.
                    - Nếu upload từ client, có thể sử dụng policy signature.
                    - Hiện hệ thống giới hạn dung lượng file tối đa là 8GB.
                `,

                ENDPOINT: ` POST <API_ENDPOINT>/_/upload `,

                PARAMETER: [
                    ['filename', 'Có', 'String', 'Payload', 'Tên file muốn upload'],
                    ['secret_key', 'Có(nếu không sử dụng policy)', 'signature', 'String', 'Payload', 'Secret key của namespace'],
                    ['source', '    Có(nếu không sử dụng filedata)', 'String', 'Payload', 'URL của file muốn upload'],
                ],

                RETURNED: {
                    True: `
                        {
                            "status": "OK",
                            "file_path": filename,
                            "estimate_time": convert_time
                        }
                    `,

                    False: `
                        {
                            "upload_error_mã lỗi": "mô tả lỗi"
                        }
                    `,
                },

                LISTERROR: [
                    ['upload_error_001', 'Unauthorized'],
                    ['upload_error_002', 'The policy document must be in JSON format'],
                    ['upload_error_003', 'Invalid policy'],
                    ['upload_error_004', 'Invalid signature'],
                    ['upload_error_005', 'Missing expires'],
                ],

                DEMO: {
                    NAME: 'Ví dụ upload bằng secret key',
                    CONNET: `
                        curl https://mps.mediacdn.vn/_/upload
                        -F convert=true
                        -F filename=example/test-trieulv.mp4
                        -F secret_key=20f7813d98b5fd9cfcb86df3065c27dc
                        -F filedata=@test.mp4
                    `,
                    NOTE: `
                        expires : policy document này có tác dụng đến Tue, 1 May 2012 03:14:07 GMT, expires tốt nhất nên để chênh lên khoảng 15-60 phút so với thời điểm tạo, sau khoảng thời gian này, server sẽ báo lỗi
                        namespace: account name (cấp cùng secret_key)
                        filename: lưu file upload với tên test.jpg (không quan tâm đến tên file gốc) (trường hợp này filename không bao gồm thư mục như đã nói ở trên)
                        directory: lưu file vào thư mục ”2012/11/10”
                        redirect: nếu up thành công sẽ redirect user đến url này
                        content-length-range: dung lượng file up ngoài khoảng 2KB đến 20MB sẽ báo lỗi
                        content-type: bắt đầu với ”image/” (file ảnh)
                    `
                }

            },

            3: {
                APINAME: 'Report theo chi tiết 1 user',

                NOTE: `
                    Upload file lên hệ thống MPS
                    - Nếu upload từ server dự án, có thể upload sử dụng secret key.
                    - Nếu upload từ client, có thể sử dụng policy signature.
                    - Hiện hệ thống giới hạn dung lượng file tối đa là 8GB.
                `,

                ENDPOINT: ` POST <API_ENDPOINT>/_/upload `,

                PARAMETER: [
                    ['filename', 'Có', 'String', 'Payload', 'Tên file muốn upload'],
                    ['secret_key', 'Có(nếu không sử dụng policy)', 'signature', 'String', 'Payload', 'Secret key của namespace'],
                    ['source', '    Có(nếu không sử dụng filedata)', 'String', 'Payload', 'URL của file muốn upload'],
                ],

                RETURNED: {
                    True: `
                        {
                            "status": "OK",
                            "file_path": filename,
                            "estimate_time": convert_time
                        }
                    `,

                    False: `
                        {
                            "upload_error_mã lỗi": "mô tả lỗi"
                        }
                    `,
                },

                LISTERROR: [
                    ['upload_error_001', 'Unauthorized'],
                    ['upload_error_002', 'The policy document must be in JSON format'],
                    ['upload_error_003', 'Invalid policy'],
                    ['upload_error_004', 'Invalid signature'],
                    ['upload_error_005', 'Missing expires'],
                ],

                DEMO: {
                    NAME: 'Ví dụ upload bằng secret key',
                    CONNET: `
                        curl https://mps.mediacdn.vn/_/upload
                        -F convert=true
                        -F filename=example/test-trieulv.mp4
                        -F secret_key=20f7813d98b5fd9cfcb86df3065c27dc
                        -F filedata=@test.mp4
                    `,
                    NOTE: `
                        expires : policy document này có tác dụng đến Tue, 1 May 2012 03:14:07 GMT, expires tốt nhất nên để chênh lên khoảng 15-60 phút so với thời điểm tạo, sau khoảng thời gian này, server sẽ báo lỗi
                        namespace: account name (cấp cùng secret_key)
                        filename: lưu file upload với tên test.jpg (không quan tâm đến tên file gốc) (trường hợp này filename không bao gồm thư mục như đã nói ở trên)
                        directory: lưu file vào thư mục ”2012/11/10”
                        redirect: nếu up thành công sẽ redirect user đến url này
                        content-length-range: dung lượng file up ngoài khoảng 2KB đến 20MB sẽ báo lỗi
                        content-type: bắt đầu với ”image/” (file ảnh)
                    `
                }

            }
        },

        'API THEO HỢP ĐỒNG': {
            'List số hợp đồng': null,
            'List report theo hợp đồng': null,
            'Report theo chi tiết 1 hợp đồng': null
        },

        'API Theo campaign': {
            'List campaign info': null,
            'list report theo campaign': null,
            'Report theo chi tiết 1 campaign': null
        }

    }
};

var myJSON = JSON.stringify(jsonAPIs);


console.log(myJSON);