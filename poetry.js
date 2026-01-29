// scripts/poets.js

/**
 * Cấu trúc dữ liệu Thơ (Poets Data)
 * Để thêm bài mới, bạn chỉ cần thêm một đối tượng {} vào trong mảng items.
 */
const poetsData = {
    title: "Thơ",
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
        // Sau này muốn thêm bài mới, bạn chỉ cần copy đoạn { ... } ở trên và dán vào đây.
    ]
};

// Hàm này dùng để hiển thị dữ liệu ra ngoài web (Vỏ trống)
function renderPoets() {
    console.log("Đang nạp danh sách thơ gồm " + poetsData.items.length + " bài.");
}

renderPoets();
console.log("Đã nạp module: Thơ");