// <script type="text/javascript" src="//unpkg.com/xlsx/dist/xlsx.full.min.js"></script>

function exportExcel (type, fn, dl) {
  var elt = document.getElementById('data-table')
  var wb = XLSX.utils.table_to_book(elt, {sheet: 'Sheet JS'})
  return dl ?
    XLSX.write(wb, {bookType: type, bookSST: true, type: 'base64'}) :
    XLSX.writeFile(wb, fn || ('test.' + (type || 'xlsx')))
}
