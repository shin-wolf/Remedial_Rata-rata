var nilaiSantri = [90, 60, 65, 97, 99, 60, 53, 91, 89];
var jumlah = 0;
for (i = 0; i < nilaiSantri.length; i++) {
  document.write(nilaiSantri[i]);
  jumlah += nilaiSantri.length;
}
document.write(jumlah / nilaiSantri.length);
