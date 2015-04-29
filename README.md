Dconverter 1.0

Tools & library yang dibutuhkan :
1. install java (https://java.com/en/download/)
2. install libreoffice (https://www.libreoffice.org/)
3. install microsoft office (2010 above)
4. install ghostscript (http://www.ghostscript.com/)
5. DocumentConverter Binary (DocumenConverter.jar + libs)
6. dconverter module

Konfigurasi :
- Sesuaikan config di file node_modules/dconverter/index.js sesuai path instalasi
//Absolute path binary DocumentConverter.jar
var jar = '/Users/yeniovianti/NetBeansProjects/DocumentConverter/dist/DocumentConverter.jar';
//Absolute path binary libreoffice
var office = '/Applications/LibreOffice.app/Contents/MacOS/soffice';


Fitur :
- Konversi dari office document file (doc, docx, xls, xlsx, ppt, pptx) ke file pdf
- Konversi dari office document file (doc, docx, xls, xlsx, ppt, pptx) ke image (png atau jpg)
- Konversi dari pdf ke image (png atau jpg)

Sample penggunaan :
- Sample konversi dari office document (doc, docx, xls, xlsx, ppt, pptx) ke file pdf

    var converter = require('dconverter');

    //Input file
    var input = 'testconvert.docx';
    //Output directory
    var outputDir = 'converted/pdf';
    converter.docTopdf(input,outputDir);
    
    //Output file adalah converted/pdf/testconvert.pdf
    
- Sample konversi dari office document (doc, docx, xls, xlsx, ppt, pptx) ke file png

    var converter = require('dconverter');
    
    //Input file
    var input = 'testconvert.docx';
    //Output directory
    var outputDir = 'converted/pdf';
    converter.docToImage(input,outputDir,"png");
    
    //Output file adalah converted/pdf/testconvert_1.png    
    
- Sample konversi dari pdf ke file png

    var converter = require('dconverter');
    
    var input = 'testconvert.pdf';
    var outputDir = 'converted/png';
    converter.docToImage(input,outputDir,"png");
    
    //Output file adalah converted/pdf/testconvert_1.png    

