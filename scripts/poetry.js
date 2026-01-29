// scripts/poetry.js

/**
 * Cấu trúc dữ liệu Thơ (Poetry Data)
 */
const poetryData = {
    title: "thơ",
    description: "Những vần thơ nhỏ ghi lại rung động của lòng.",
    items: [
        {
            id: 1,
            title: "Hơi thở nhẹ",
            date: "29/01/2026",
            excerpt: "Chỉ cần một hơi thở nhẹ, là bao phép lạ hiển bày...",
            content: `
                Châu báu chất đầy thế giới
                Tôi đem tặng bạn sáng nay
                Một vốc kim cương sáng chói
                Long lanh suốt cả đêm ngày.
            `
        },
        {
            id: 2,
            title: "Nhành cây trước sân",
            date: "20/01/2026",
            excerpt: "Lặng yên nhìn nhành cây lớn lên trong nắng sớm...",
            content: `
                Sáng nay cây dậy sớm
                Đón nắng vàng trên cao
                Lòng ta cũng xôn xao
                Một niềm vui nho nhỏ.
            `
        }
    ]
};

function renderPoetry() {
    console.log("Đã nạp danh sách thơ (poetry): " + poetryData.items.length + " bài.");
}

renderPoetry();