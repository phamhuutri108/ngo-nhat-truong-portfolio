const filmsData = {
    "vi": {
        title: "phim",
        layout: "grid", // Đánh dấu đây là giao diện lưới
        description: "Những câu chuyện được kể bằng ánh sáng.",
        items: [
            



            {
                id: "phuc-sinh",
                title: "Phục Sinh (Resurrection)",
                thumbnail: "assets/films/phuc-sinh/still/phuc-sinh-still-4.jpeg", 
                genre: "Phim ngắn",
                year: "2022",
                duration: "", // Không hiển thị theo yêu cầu
                youtubeId: "w9I_AQBpKps",
                // Dữ liệu mới: Poster & Still
                poster: "assets/films/phuc-sinh/phuc-sinh-poster.jpeg",
                stills: Array.from({length: 13}, (_, i) => `assets/films/phuc-sinh/still/phuc-sinh-still-${i+1}.jpeg`),
                
                crew: `
                    <li><b>Đạo diễn / Kịch bản / Dựng phim:</b> Đức Đoàn</li>
                    <li><b>Diễn viên:</b> Ngô Nhật Trường, Phát Triển, Phan Nhật Khoa, Trầm Hương</li>
                    <li><b>Quay phim:</b> Lê Văn Hoàng</li>
                    <li><b>Sản xuất:</b> Đoàn Tôn Vân Anh, Phương Hương Giang</li>
                    <li><b>Âm thanh:</b> Đại Việt</li>
                    <li><b>Âm nhạc:</b> Đoàn Tuấn Đức, Nguyễn Thảo, Lê Như Ngọc Mai</li>
                    <li><b>Đơn vị sản xuất:</b> Enlightenment Pictures</li>
                `,
                bts: Array.from({length: 5}, (_, i) => `assets/films/phuc-sinh/BTS/phuc-sinh-BTS-${i+1}.jpeg`)
            },
            {
                id: "hai-chu-chau",
                title: "Hai Chú Cháu",
                thumbnail: "https://img.youtube.com/vi/AcXZ9b-ye9w/maxresdefault.jpg",
                genre: "Phim ngắn",
                year: "2016",
                duration: "05:32",
                youtubeId: "AcXZ9b-ye9w",
                crew: `
                    <li><b>Chuyển thể từ truyện ngắn của:</b> Hữu Thắng</li>
                    <li><b>Đạo diễn / Quay phim / Dựng phim:</b> Nguyễn Đình Quý Anh</li>
                    <li><b>Diễn viên:</b> Ngô Nhật Trường, Trần Hoàng Phi, Hạnh Phúc, Nguyễn Huỳnh Long, Lê Nhã, Thanh Trúc, Trương Ngọc Quốc Dũng</li>
                    <li><b>Sản xuất:</b> Huỳnh Ngọc Việt Triều</li>
                    <li><b>Trợ lý đạo diễn:</b> Trương Ngọc Quốc Dũng</li>
                    <li><b>Thư ký / Phục trang:</b> Lê Nhã</li>
                    <li><b>Âm thanh:</b> Trần Quang Huyền</li>
                `,
                bts: Array.from({length: 12}, (_, i) => `assets/films/hai-chu-chau/BTS/hai-chu-chau-BTS-${i+1}.jpeg`)
            }
        ]
    },
    "en": {
        title: "films",
        layout: "grid",
        description: "Stories told by light.",
        items: [
            {
                id: "phuc-sinh",
                title: "Resurrection",
                thumbnail: "assets/films/phuc-sinh/still/phuc-sinh-still-4.jpeg",
                genre: "Short Film",
                year: "2022",
                duration: "",
                youtubeId: "w9I_AQBpKps",
                poster: "assets/films/phuc-sinh/phuc-sinh-poster.jpeg",
                stills: Array.from({length: 13}, (_, i) => `assets/films/phuc-sinh/still/phuc-sinh-still-${i+1}.jpeg`),
                
                crew: `
                    <li><b>Director / Screenplay / Editor:</b> Đức Đoàn</li>
                    <li><b>Cast:</b> Ngô Nhật Trường, Phát Triển, Phan Nhật Khoa, Trầm Hương</li>
                    <li><b>Photography:</b> Lê Văn Hoàng</li>
                    <li><b>Producer:</b> Đoàn Tôn Vân Anh, Phương Hương Giang</li>
                    <li><b>Sound:</b> Đại Việt</li>
                    <li><b>Music:</b> Đoàn Tuấn Đức, Nguyễn Thảo, Lê Như Ngọc Mai</li>
                    <li><b>Production:</b> Enlightenment Pictures</li>
                `,
                bts: Array.from({length: 5}, (_, i) => `assets/films/phuc-sinh/BTS/phuc-sinh-BTS-${i+1}.jpeg`)
            },
            
            
            
            
            
            {
                id: "hai-chu-chau",
                title: "Hai Chú Cháu",
                thumbnail: src="assets/films/hai-chu-chau/BTS/hai-chu-chau-BTS-5.jpeg", // Lấy ảnh thumb từ Youtube
                genre: "Phim ngắn",
                year: "2016",
                duration: "05:32",
                youtubeId: "AcXZ9b-ye9w",
                crew: `
                    <li><b>Chuyển thể từ truyện ngắn của</b> Hữu Thắng</li>
                    <li><b>Đạo diễn / Quay phim / Dựng phim:</b> Nguyễn Đình Quý Anh</li>
                    <li><b>Diễn viên:</b> Ngô Nhật Trường, Trần Hoàng Phi, Hạnh Phúc, Nguyễn Huỳnh Long, Lê Nhã, Thanh Trúc, Trương Ngọc Quốc Dũng</li>
                    <li><b>Sản xuất:</b> Huỳnh Ngọc Việt Triều</li>
                    <li><b>Trợ lý đạo diễn:</b> Trương Ngọc Quốc Dũng</li>
                    <li><b>Thư ký / Phục trang:</b> Lê Nhã</li>
                    <li><b>Âm thanh:</b> Trần Quang Huyền</li>
                `,
                // Tạo mảng 12 ảnh BTS tự động
                bts: Array.from({length: 12}, (_, i) => `assets/films/hai-chu-chau/BTS/hai-chu-chau-BTS-${i+1}.jpeg`)
            }
        ]
    },
    "en": {
        title: "films",
        layout: "grid",
        description: "Stories told by light.",
        items: [
            {
                id: "hai-chu-chau",
                title: "Uncle & Son", // Tạm dịch hoặc để nguyên tiếng Việt nếu muốn
                thumbnail: src="assets/films/hai-chu-chau/BTS/hai-chu-chau-BTS-5.jpeg",
                genre: "Short Film",
                year: "2016",
                duration: "05:32",
                youtubeId: "AcXZ9b-ye9w",
                crew: `
                    <li><b>Based on the short story of</b> Hữu Thắng</li>
                    <li><b>Director / Cinematographer / Editor:</b> Nguyễn Đình Quý Anh</li>
                    <li><b>Cast:</b> Ngô Nhật Trường, Trần Hoàng Phi, Hạnh Phúc, Nguyễn Huỳnh Long, Lê Nhã, Thanh Trúc, Trương Ngọc Quốc Dũng</li>
                    <li><b>Producer:</b> Huỳnh Ngọc Việt Triều</li>
                    <li><b>Assistant Director:</b> Trương Ngọc Quốc Dũng</li>
                    <li><b>Secretary / Wardrobe:</b> Lê Nhã</li>
                    <li><b>Sound:</b> Trần Quang Huyền</li>
                `,
                bts: Array.from({length: 12}, (_, i) => `assets/films/hai-chu-chau/BTS/hai-chu-chau-BTS-${i+1}.jpeg`)
            }
        ]
    },
    "fr": {
        title: "films",
        layout: "grid",
        description: "Histoires racontées par la lumière.",
        items: [
            {
                id: "hai-chu-chau",
                title: "Oncles et Neveux",
                thumbnail: src="assets/films/hai-chu-chau/BTS/hai-chu-chau-BTS-5.jpeg",
                genre: "Court Métrage",
                year: "2016",
                duration: "05:32",
                youtubeId: "AcXZ9b-ye9w",
                crew: `
                    <li><b>Basé sur la nouvelle de</b> Hữu Thắng</li>
                    <li><b>Réalisateur / Directeur Photo / Monteur:</b> Nguyễn Đình Quý Anh</li>
                    <li><b>Distribution:</b> Ngô Nhật Trường, Trần Hoàng Phi, Hạnh Phúc, Nguyễn Huỳnh Long, Lê Nhã, Thanh Trúc, Trương Ngọc Quốc Dũng</li>
                    <li><b>Producteur:</b> Huỳnh Ngọc Việt Triều</li>
                    <li><b>Assistant Réalisateur:</b> Trương Ngọc Quốc Dũng</li>
                    <li><b>Secrétaire / Costumes:</b> Lê Nhã</li>
                    <li><b>Son:</b> Trần Quang Huyền</li>
                `,
                bts: Array.from({length: 12}, (_, i) => `assets/films/hai-chu-chau/BTS/hai-chu-chau-BTS-${i+1}.jpeg`)
            }
        ]
    }
};
console.log("Đã nạp module: Phim (Grid Version)");