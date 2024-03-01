const check =  (a) => a % 2 === 0 
check(10);
//bài 4
var sachs = [
    {
        tacGia: 'Harper Lee',
        tieuDe: 'To kill a Mockingbird',
        namXuatBan: '2020',
        trangThai : true 
    },
    {
        tacGia: 'Ray Bradbury',
        tieuDe: 'Fahrenheit 451',
        namXuatBan: '2022',
        trangThai : false ,
    }
]


// sach.forEach(function(i){
//     const book = 'Tác giả :'+ i.tacGia +' Tiêu đề : ' + i.tieuDe + ' Năm xuất bản : ' + i.namXuatBan   ;
//     console.log(book);
// });

for ( i in sachs){
    console.log(
    `${i} Tieu De: ${sachs[i].tieuDe}
     Tac gia: ${sachs[i].tacGia}
     Nam xuat ban: ${sachs[i].namXuatBan}
     Trang thai: ${sachs[i].trangThai? 'con': 'het'}
    `);
}


//bài 1

const mang = [1, 2, 3, 4];
let max = mang[0]; 
let min = mang[0];
for (i in mang) {   
//   if (mang[i] > max) {
//     max = mang[i];
//   }
  (mang[i] > max) ? max = mang[i] : max ;
//   if (mang[i] < min) {
//     min = mang[i];
//   }
  (mang[i] < min) ? min = mang[i] : min ;
}

console.log(max);
console.log(min);

//bài 2
function FindKeyLong(name) {
    let arr = name.split(" ");
    let max =  arr[0];
    arr.forEach(element => {
        max = max.length < element.length ? element : max ;
    });

    console.log(max);
}
FindKeyLong("nguyen van tuan");

