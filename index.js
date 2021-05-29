var fs = require('fs');

let jsonAPIs = {
    "CLASSAPIS": [
        {
            "CLASSNAME": "API THEO USER",
            "LISTAPIS": [
                {
                    "APINAME": "List username",
                    "NOTE": "\n Upload file lên hệ thống MPS\n - Nếu upload từ server dự án, có thể upload sử dụng secret key.\n - Nếu upload từ client, có thể sử dụng policy signature.\n - Hiện hệ thống giới hạn dung lượng file tối đa là 8GB.\n",
                    "ENDPOINT": " POST <API_ENDPOINT>/_/upload ",
                    "PARAMETER": [
                        [
                            "filename",
                            "Có",
                            "String",
                            "Payload",
                            "Tên file muốn upload"
                        ],
                        [
                            "secret_key",
                            "Có(nếu không sử dụng policy)",
                            "signature",
                            "String",
                            "Payload"
                        ],
                        [
                            "source",
                            "    Có(nếu không sử dụng filedata)",
                            "String",
                            "Payload",
                            "URL của file muốn upload"
                        ]
                    ],
                    "RETURNED": {
                        "R_TRUE": "\n                        {\n                            \"status\": \"OK\",\n                            \"file_path\": filename,\n                            \"estimate_time\": convert_time\n                        }\n                    ",
                        "R_FALSE": "\n                        {\n                            \"upload_error_mã lỗi\": \"mô tả lỗi\"\n                        }\n                    "
                    },
                    "LISTERROR": [
                        [
                            "upload_error_001",
                            "Unauthorized"
                        ],
                        [
                            "upload_error_002",
                            "The policy document must be in JSON format"
                        ],
                        [
                            "upload_error_003",
                            "Invalid policy"
                        ],
                        [
                            "upload_error_004",
                            "Invalid signature"
                        ],
                        [
                            "upload_error_005",
                            "Missing expires"
                        ]
                    ],
                    "DEMO": {
                        "NAME": "Ví dụ upload bằng secret key",
                        "CONNET": "\n                        curl https://mps.mediacdn.vn/_/upload\n                        -F convert=true\n                        -F filename=example/test-trieulv.mp4\n                        -F secret_key=20f7813d98b5fd9cfcb86df3065c27dc\n                        -F filedata=@test.mp4\n                    ",
                        "NOTE": "\n                        expires : policy document này có tác dụng đến Tue, 1 May 2012 03:14:07 GMT, expires tốt nhất nên để chênh lên khoảng 15-60 phút so với thời điểm tạo, sau khoảng thời gian này, server sẽ báo lỗi\n                        namespace: account name (cấp cùng secret_key)\n                        filename: lưu file upload với tên test.jpg (không quan tâm đến tên file gốc) (trường hợp này filename không bao gồm thư mục như đã nói ở trên)\n                        directory: lưu file vào thư mục ”2012/11/10”\n                        redirect: nếu up thành công sẽ redirect user đến url này\n                        content-length-range: dung lượng file up ngoài khoảng 2KB đến 20MB sẽ báo lỗi\n                        content-type: bắt đầu với ”image/” (file ảnh)\n                    "
                    }
                },
                {
                    "APINAME": "Report theo user",
                    "NOTE": "\n                    Upload file lên hệ thống MPS\n                    - Nếu upload từ server dự án, có thể upload sử dụng secret key.\n                    - Nếu upload từ client, có thể sử dụng policy signature.\n                    - Hiện hệ thống giới hạn dung lượng file tối đa là 8GB.\n                ",
                    "ENDPOINT": " POST <API_ENDPOINT>/_/upload ",
                    "PARAMETER": [
                        [
                            "filename",
                            "Có",
                            "String",
                            "Payload",
                            "Tên file muốn upload"
                        ],
                        [
                            "secret_key",
                            "Có(nếu không sử dụng policy)",
                            "signature",
                            "String",
                            "Payload"
                        ],
                        [
                            "source",
                            "    Có(nếu không sử dụng filedata)",
                            "String",
                            "Payload",
                            "URL của file muốn upload"
                        ]
                    ],
                    "RETURNED": {
                        "R_TRUE": "\n                        {\n                            \"status\": \"OK\",\n                            \"file_path\": filename,\n                            \"estimate_time\": convert_time\n                        }\n                    ",
                        "R_FALSE": "\n                        {\n                            \"upload_error_mã lỗi\": \"mô tả lỗi\"\n                        }\n                    "
                    },
                    "LISTERROR": [
                        [
                            "upload_error_001",
                            "Unauthorized"
                        ],
                        [
                            "upload_error_002",
                            "The policy document must be in JSON format"
                        ],
                        [
                            "upload_error_003",
                            "Invalid policy"
                        ],
                        [
                            "upload_error_004",
                            "Invalid signature"
                        ],
                        [
                            "upload_error_005",
                            "Missing expires"
                        ]
                    ],
                    "DEMO": {
                        "NAME": "Ví dụ upload bằng secret key",
                        "CONNET": "\n                        curl https://mps.mediacdn.vn/_/upload\n                        -F convert=true\n                        -F filename=example/test-trieulv.mp4\n                        -F secret_key=20f7813d98b5fd9cfcb86df3065c27dc\n                        -F filedata=@test.mp4\n                    ",
                        "NOTE": "\n                        expires : policy document này có tác dụng đến Tue, 1 May 2012 03:14:07 GMT, expires tốt nhất nên để chênh lên khoảng 15-60 phút so với thời điểm tạo, sau khoảng thời gian này, server sẽ báo lỗi\n                        namespace: account name (cấp cùng secret_key)\n                        filename: lưu file upload với tên test.jpg (không quan tâm đến tên file gốc) (trường hợp này filename không bao gồm thư mục như đã nói ở trên)\n                        directory: lưu file vào thư mục ”2012/11/10”\n                        redirect: nếu up thành công sẽ redirect user đến url này\n                        content-length-range: dung lượng file up ngoài khoảng 2KB đến 20MB sẽ báo lỗi\n                        content-type: bắt đầu với ”image/” (file ảnh)\n                    "
                    }
                },
                {
                    "APINAME": "Report theo chi tiết 1 user",
                    "NOTE": "\n                    Upload file lên hệ thống MPS\n                    - Nếu upload từ server dự án, có thể upload sử dụng secret key.\n                    - Nếu upload từ client, có thể sử dụng policy signature.\n                    - Hiện hệ thống giới hạn dung lượng file tối đa là 8GB.\n                ",
                    "ENDPOINT": " POST <API_ENDPOINT>/_/upload ",
                    "PARAMETER": [
                        [
                            "filename",
                            "Có",
                            "String",
                            "Payload",
                            "Tên file muốn upload"
                        ],
                        [
                            "secret_key",
                            "Có(nếu không sử dụng policy)",
                            "signature",
                            "String",
                            "Payload"
                        ],
                        [
                            "source",
                            "    Có(nếu không sử dụng filedata)",
                            "String",
                            "Payload",
                            "URL của file muốn upload"
                        ]
                    ],
                    "RETURNED": {
                        "R_TRUE": "\n                        {\n                            \"status\": \"OK\",\n                            \"file_path\": filename,\n                            \"estimate_time\": convert_time\n                        }\n                    ",
                        "R_FALSE": "\n                        {\n                            \"upload_error_mã lỗi\": \"mô tả lỗi\"\n                        }\n                    "
                    },
                    "LISTERROR": [
                        [
                            "upload_error_001",
                            "Unauthorized"
                        ],
                        [
                            "upload_error_002",
                            "The policy document must be in JSON format"
                        ],
                        [
                            "upload_error_003",
                            "Invalid policy"
                        ],
                        [
                            "upload_error_004",
                            "Invalid signature"
                        ],
                        [
                            "upload_error_005",
                            "Missing expires"
                        ]
                    ],
                    "DEMO": {
                        "NAME": "Ví dụ upload bằng secret key",
                        "CONNET": "\n                        curl https://mps.mediacdn.vn/_/upload\n                        -F convert=true\n                        -F filename=example/test-trieulv.mp4\n                        -F secret_key=20f7813d98b5fd9cfcb86df3065c27dc\n                        -F filedata=@test.mp4\n                    ",
                        "NOTE": "\n                        expires : policy document này có tác dụng đến Tue, 1 May 2012 03:14:07 GMT, expires tốt nhất nên để chênh lên khoảng 15-60 phút so với thời điểm tạo, sau khoảng thời gian này, server sẽ báo lỗi\n                        namespace: account name (cấp cùng secret_key)\n                        filename: lưu file upload với tên test.jpg (không quan tâm đến tên file gốc) (trường hợp này filename không bao gồm thư mục như đã nói ở trên)\n                        directory: lưu file vào thư mục ”2012/11/10”\n                        redirect: nếu up thành công sẽ redirect user đến url này\n                        content-length-range: dung lượng file up ngoài khoảng 2KB đến 20MB sẽ báo lỗi\n                        content-type: bắt đầu với ”image/” (file ảnh)\n                    "
                    }
                }
            ]
        },
        {
            "CLASSNAME": "API THEO HỢP ĐỒNG",
            "LISTAPIS": [
                {
                    "APINAME": "List username",
                    "NOTE": "\n Upload file lên hệ thống MPS\n - Nếu upload từ server dự án, có thể upload sử dụng secret key.\n - Nếu upload từ client, có thể sử dụng policy signature.\n - Hiện hệ thống giới hạn dung lượng file tối đa là 8GB.\n",
                    "ENDPOINT": " POST <API_ENDPOINT>/_/upload ",
                    "PARAMETER": [
                        [
                            "filename",
                            "Có",
                            "String",
                            "Payload",
                            "Tên file muốn upload"
                        ],
                        [
                            "secret_key",
                            "Có(nếu không sử dụng policy)",
                            "signature",
                            "String",
                            "Payload"
                        ],
                        [
                            "source",
                            "    Có(nếu không sử dụng filedata)",
                            "String",
                            "Payload",
                            "URL của file muốn upload"
                        ]
                    ],
                    "RETURNED": {
                        "R_TRUE": "\n                        {\n                            \"status\": \"OK\",\n                            \"file_path\": filename,\n                            \"estimate_time\": convert_time\n                        }\n                    ",
                        "R_FALSE": "\n                        {\n                            \"upload_error_mã lỗi\": \"mô tả lỗi\"\n                        }\n                    "
                    },
                    "LISTERROR": [
                        [
                            "upload_error_001",
                            "Unauthorized"
                        ],
                        [
                            "upload_error_002",
                            "The policy document must be in JSON format"
                        ],
                        [
                            "upload_error_003",
                            "Invalid policy"
                        ],
                        [
                            "upload_error_004",
                            "Invalid signature"
                        ],
                        [
                            "upload_error_005",
                            "Missing expires"
                        ]
                    ],
                    "DEMO": {
                        "NAME": "Ví dụ upload bằng secret key",
                        "CONNET": "\n                        curl https://mps.mediacdn.vn/_/upload\n                        -F convert=true\n                        -F filename=example/test-trieulv.mp4\n                        -F secret_key=20f7813d98b5fd9cfcb86df3065c27dc\n                        -F filedata=@test.mp4\n                    ",
                        "NOTE": "\n                        expires : policy document này có tác dụng đến Tue, 1 May 2012 03:14:07 GMT, expires tốt nhất nên để chênh lên khoảng 15-60 phút so với thời điểm tạo, sau khoảng thời gian này, server sẽ báo lỗi\n                        namespace: account name (cấp cùng secret_key)\n                        filename: lưu file upload với tên test.jpg (không quan tâm đến tên file gốc) (trường hợp này filename không bao gồm thư mục như đã nói ở trên)\n                        directory: lưu file vào thư mục ”2012/11/10”\n                        redirect: nếu up thành công sẽ redirect user đến url này\n                        content-length-range: dung lượng file up ngoài khoảng 2KB đến 20MB sẽ báo lỗi\n                        content-type: bắt đầu với ”image/” (file ảnh)\n                    "
                    }
                },
                {
                    "APINAME": "Report theo user",
                    "NOTE": "\n                    Upload file lên hệ thống MPS\n                    - Nếu upload từ server dự án, có thể upload sử dụng secret key.\n                    - Nếu upload từ client, có thể sử dụng policy signature.\n                    - Hiện hệ thống giới hạn dung lượng file tối đa là 8GB.\n                ",
                    "ENDPOINT": " POST <API_ENDPOINT>/_/upload ",
                    "PARAMETER": [
                        [
                            "filename",
                            "Có",
                            "String",
                            "Payload",
                            "Tên file muốn upload"
                        ],
                        [
                            "secret_key",
                            "Có(nếu không sử dụng policy)",
                            "signature",
                            "String",
                            "Payload"
                        ],
                        [
                            "source",
                            "    Có(nếu không sử dụng filedata)",
                            "String",
                            "Payload",
                            "URL của file muốn upload"
                        ]
                    ],
                    "RETURNED": {
                        "R_TRUE": "\n                        {\n                            \"status\": \"OK\",\n                            \"file_path\": filename,\n                            \"estimate_time\": convert_time\n                        }\n                    ",
                        "R_FALSE": "\n                        {\n                            \"upload_error_mã lỗi\": \"mô tả lỗi\"\n                        }\n                    "
                    },
                    "LISTERROR": [
                        [
                            "upload_error_001",
                            "Unauthorized"
                        ],
                        [
                            "upload_error_002",
                            "The policy document must be in JSON format"
                        ],
                        [
                            "upload_error_003",
                            "Invalid policy"
                        ],
                        [
                            "upload_error_004",
                            "Invalid signature"
                        ],
                        [
                            "upload_error_005",
                            "Missing expires"
                        ]
                    ],
                    "DEMO": {
                        "NAME": "Ví dụ upload bằng secret key",
                        "CONNET": "\n                        curl https://mps.mediacdn.vn/_/upload\n                        -F convert=true\n                        -F filename=example/test-trieulv.mp4\n                        -F secret_key=20f7813d98b5fd9cfcb86df3065c27dc\n                        -F filedata=@test.mp4\n                    ",
                        "NOTE": "\n                        expires : policy document này có tác dụng đến Tue, 1 May 2012 03:14:07 GMT, expires tốt nhất nên để chênh lên khoảng 15-60 phút so với thời điểm tạo, sau khoảng thời gian này, server sẽ báo lỗi\n                        namespace: account name (cấp cùng secret_key)\n                        filename: lưu file upload với tên test.jpg (không quan tâm đến tên file gốc) (trường hợp này filename không bao gồm thư mục như đã nói ở trên)\n                        directory: lưu file vào thư mục ”2012/11/10”\n                        redirect: nếu up thành công sẽ redirect user đến url này\n                        content-length-range: dung lượng file up ngoài khoảng 2KB đến 20MB sẽ báo lỗi\n                        content-type: bắt đầu với ”image/” (file ảnh)\n                    "
                    }
                }
            ]
        },
        {
            "CLASSNAME": "API THEO CAMPAIGN",
            "LISTAPIS": [
                {
                    "APINAME": "List username",
                    "NOTE": "\n Upload file lên hệ thống MPS\n - Nếu upload từ server dự án, có thể upload sử dụng secret key.\n - Nếu upload từ client, có thể sử dụng policy signature.\n - Hiện hệ thống giới hạn dung lượng file tối đa là 8GB.\n",
                    "ENDPOINT": " POST <API_ENDPOINT>/_/upload ",
                    "PARAMETER": [
                        [
                            "filename",
                            "Có",
                            "String",
                            "Payload",
                            "Tên file muốn upload"
                        ],
                        [
                            "secret_key",
                            "Có(nếu không sử dụng policy)",
                            "signature",
                            "String",
                            "Payload"
                        ],
                        [
                            "source",
                            "    Có(nếu không sử dụng filedata)",
                            "String",
                            "Payload",
                            "URL của file muốn upload"
                        ]
                    ],
                    "RETURNED": {
                        "R_TRUE": "\n                        {\n                            \"status\": \"OK\",\n                            \"file_path\": filename,\n                            \"estimate_time\": convert_time\n                        }\n                    ",
                        "R_FALSE": "\n                        {\n                            \"upload_error_mã lỗi\": \"mô tả lỗi\"\n                        }\n                    "
                    },
                    "LISTERROR": [
                        [
                            "upload_error_001",
                            "Unauthorized"
                        ],
                        [
                            "upload_error_002",
                            "The policy document must be in JSON format"
                        ],
                        [
                            "upload_error_003",
                            "Invalid policy"
                        ],
                        [
                            "upload_error_004",
                            "Invalid signature"
                        ],
                        [
                            "upload_error_005",
                            "Missing expires"
                        ]
                    ],
                    "DEMO": {
                        "NAME": "Ví dụ upload bằng secret key",
                        "CONNET": "\n                        curl https://mps.mediacdn.vn/_/upload\n                        -F convert=true\n                        -F filename=example/test-trieulv.mp4\n                        -F secret_key=20f7813d98b5fd9cfcb86df3065c27dc\n                        -F filedata=@test.mp4\n                    ",
                        "NOTE": "\n                        expires : policy document này có tác dụng đến Tue, 1 May 2012 03:14:07 GMT, expires tốt nhất nên để chênh lên khoảng 15-60 phút so với thời điểm tạo, sau khoảng thời gian này, server sẽ báo lỗi\n                        namespace: account name (cấp cùng secret_key)\n                        filename: lưu file upload với tên test.jpg (không quan tâm đến tên file gốc) (trường hợp này filename không bao gồm thư mục như đã nói ở trên)\n                        directory: lưu file vào thư mục ”2012/11/10”\n                        redirect: nếu up thành công sẽ redirect user đến url này\n                        content-length-range: dung lượng file up ngoài khoảng 2KB đến 20MB sẽ báo lỗi\n                        content-type: bắt đầu với ”image/” (file ảnh)\n                    "
                    }
                },
                {
                    "APINAME": "Report theo user",
                    "NOTE": "\n                    Upload file lên hệ thống MPS\n                    - Nếu upload từ server dự án, có thể upload sử dụng secret key.\n                    - Nếu upload từ client, có thể sử dụng policy signature.\n                    - Hiện hệ thống giới hạn dung lượng file tối đa là 8GB.\n                ",
                    "ENDPOINT": " POST <API_ENDPOINT>/_/upload ",
                    "PARAMETER": [
                        [
                            "filename",
                            "Có",
                            "String",
                            "Payload",
                            "Tên file muốn upload"
                        ],
                        [
                            "secret_key",
                            "Có(nếu không sử dụng policy)",
                            "signature",
                            "String",
                            "Payload"
                        ],
                        [
                            "source",
                            "    Có(nếu không sử dụng filedata)",
                            "String",
                            "Payload",
                            "URL của file muốn upload"
                        ]
                    ],
                    "RETURNED": {
                        "R_TRUE": "\n                        {\n                            \"status\": \"OK\",\n                            \"file_path\": filename,\n                            \"estimate_time\": convert_time\n                        }\n                    ",
                        "R_FALSE": "\n                        {\n                            \"upload_error_mã lỗi\": \"mô tả lỗi\"\n                        }\n                    "
                    },
                    "LISTERROR": [
                        [
                            "upload_error_001",
                            "Unauthorized"
                        ],
                        [
                            "upload_error_002",
                            "The policy document must be in JSON format"
                        ],
                        [
                            "upload_error_003",
                            "Invalid policy"
                        ],
                        [
                            "upload_error_004",
                            "Invalid signature"
                        ],
                        [
                            "upload_error_005",
                            "Missing expires"
                        ]
                    ],
                    "DEMO": {
                        "NAME": "Ví dụ upload bằng secret key",
                        "CONNET": "\n                        curl https://mps.mediacdn.vn/_/upload\n                        -F convert=true\n                        -F filename=example/test-trieulv.mp4\n                        -F secret_key=20f7813d98b5fd9cfcb86df3065c27dc\n                        -F filedata=@test.mp4\n                    ",
                        "NOTE": "\n                        expires : policy document này có tác dụng đến Tue, 1 May 2012 03:14:07 GMT, expires tốt nhất nên để chênh lên khoảng 15-60 phút so với thời điểm tạo, sau khoảng thời gian này, server sẽ báo lỗi\n                        namespace: account name (cấp cùng secret_key)\n                        filename: lưu file upload với tên test.jpg (không quan tâm đến tên file gốc) (trường hợp này filename không bao gồm thư mục như đã nói ở trên)\n                        directory: lưu file vào thư mục ”2012/11/10”\n                        redirect: nếu up thành công sẽ redirect user đến url này\n                        content-length-range: dung lượng file up ngoài khoảng 2KB đến 20MB sẽ báo lỗi\n                        content-type: bắt đầu với ”image/” (file ảnh)\n                    "
                    }
                },
                {
                    "APINAME": "Report theo chi tiết 1 user",
                    "NOTE": "\n                    Upload file lên hệ thống MPS\n                    - Nếu upload từ server dự án, có thể upload sử dụng secret key.\n                    - Nếu upload từ client, có thể sử dụng policy signature.\n                    - Hiện hệ thống giới hạn dung lượng file tối đa là 8GB.\n                ",
                    "ENDPOINT": " POST <API_ENDPOINT>/_/upload ",
                    "PARAMETER": [
                        [
                            "filename",
                            "Có",
                            "String",
                            "Payload",
                            "Tên file muốn upload"
                        ],
                        [
                            "secret_key",
                            "Có(nếu không sử dụng policy)",
                            "signature",
                            "String",
                            "Payload"
                        ],
                        [
                            "source",
                            "    Có(nếu không sử dụng filedata)",
                            "String",
                            "Payload",
                            "URL của file muốn upload"
                        ]
                    ],
                    "RETURNED": {
                        "R_TRUE": "\n                        {\n                            \"status\": \"OK\",\n                            \"file_path\": filename,\n                            \"estimate_time\": convert_time\n                        }\n                    ",
                        "R_FALSE": "\n                        {\n                            \"upload_error_mã lỗi\": \"mô tả lỗi\"\n                        }\n                    "
                    },
                    "LISTERROR": [
                        [
                            "upload_error_001",
                            "Unauthorized"
                        ],
                        [
                            "upload_error_002",
                            "The policy document must be in JSON format"
                        ],
                        [
                            "upload_error_003",
                            "Invalid policy"
                        ],
                        [
                            "upload_error_004",
                            "Invalid signature"
                        ],
                        [
                            "upload_error_005",
                            "Missing expires"
                        ]
                    ],
                    "DEMO": {
                        "NAME": "Ví dụ upload bằng secret key",
                        "CONNET": "\n                        curl https://mps.mediacdn.vn/_/upload\n                        -F convert=true\n                        -F filename=example/test-trieulv.mp4\n                        -F secret_key=20f7813d98b5fd9cfcb86df3065c27dc\n                        -F filedata=@test.mp4\n                    ",
                        "NOTE": "\n                        expires : policy document này có tác dụng đến Tue, 1 May 2012 03:14:07 GMT, expires tốt nhất nên để chênh lên khoảng 15-60 phút so với thời điểm tạo, sau khoảng thời gian này, server sẽ báo lỗi\n                        namespace: account name (cấp cùng secret_key)\n                        filename: lưu file upload với tên test.jpg (không quan tâm đến tên file gốc) (trường hợp này filename không bao gồm thư mục như đã nói ở trên)\n                        directory: lưu file vào thư mục ”2012/11/10”\n                        redirect: nếu up thành công sẽ redirect user đến url này\n                        content-length-range: dung lượng file up ngoài khoảng 2KB đến 20MB sẽ báo lỗi\n                        content-type: bắt đầu với ”image/” (file ảnh)\n                    "
                    }
                },
                {
                    "APINAME": "Report theo chi tiết 1 user",
                    "NOTE": "\n                    Upload file lên hệ thống MPS\n                    - Nếu upload từ server dự án, có thể upload sử dụng secret key.\n                    - Nếu upload từ client, có thể sử dụng policy signature.\n                    - Hiện hệ thống giới hạn dung lượng file tối đa là 8GB.\n                ",
                    "ENDPOINT": " POST <API_ENDPOINT>/_/upload ",
                    "PARAMETER": [
                        [
                            "filename",
                            "Có",
                            "String",
                            "Payload",
                            "Tên file muốn upload"
                        ],
                        [
                            "secret_key",
                            "Có(nếu không sử dụng policy)",
                            "signature",
                            "String",
                            "Payload"
                        ],
                        [
                            "source",
                            "    Có(nếu không sử dụng filedata)",
                            "String",
                            "Payload",
                            "URL của file muốn upload"
                        ]
                    ],
                    "RETURNED": {
                        "R_TRUE": "\n                        {\n                            \"status\": \"OK\",\n                            \"file_path\": filename,\n                            \"estimate_time\": convert_time\n                        }\n                    ",
                        "R_FALSE": "\n                        {\n                            \"upload_error_mã lỗi\": \"mô tả lỗi\"\n                        }\n                    "
                    },
                    "LISTERROR": [
                        [
                            "upload_error_001",
                            "Unauthorized"
                        ],
                        [
                            "upload_error_002",
                            "The policy document must be in JSON format"
                        ],
                        [
                            "upload_error_003",
                            "Invalid policy"
                        ],
                        [
                            "upload_error_004",
                            "Invalid signature"
                        ],
                        [
                            "upload_error_005",
                            "Missing expires"
                        ]
                    ],
                    "DEMO": {
                        "NAME": "Ví dụ upload bằng secret key",
                        "CONNET": "\n                        curl https://mps.mediacdn.vn/_/upload\n                        -F convert=true\n                        -F filename=example/test-trieulv.mp4\n                        -F secret_key=20f7813d98b5fd9cfcb86df3065c27dc\n                        -F filedata=@test.mp4\n                    ",
                        "NOTE": "\n                        expires : policy document này có tác dụng đến Tue, 1 May 2012 03:14:07 GMT, expires tốt nhất nên để chênh lên khoảng 15-60 phút so với thời điểm tạo, sau khoảng thời gian này, server sẽ báo lỗi\n                        namespace: account name (cấp cùng secret_key)\n                        filename: lưu file upload với tên test.jpg (không quan tâm đến tên file gốc) (trường hợp này filename không bao gồm thư mục như đã nói ở trên)\n                        directory: lưu file vào thư mục ”2012/11/10”\n                        redirect: nếu up thành công sẽ redirect user đến url này\n                        content-length-range: dung lượng file up ngoài khoảng 2KB đến 20MB sẽ báo lỗi\n                        content-type: bắt đầu với ”image/” (file ảnh)\n                    "
                    }
                }
            ]
        }
    ]
};

var myJSON = JSON.stringify(jsonAPIs);

fs.writeFileSync('jsonAPIs.json', myJSON);