// productos.js
const productos = [
    {
        nombre: "Desmalezadora",
        precio: "458",
        imagen: "https://placehold.co/400x300/E0F2F7/2C3E50?text=Imagen+Desmalezadora"
    },
    {
        nombre: "Disco de Corte",
        precio: "11",
        imagen: "https://http2.mlstatic.com/D_Q_NP_2X_734813-MLV81164593273_122024-E.webp"
    },
    {
        nombre: "Podadora",
        precio: "162",
        imagen: "https://placehold.co/400x300/F8D7DA/721C24?text=Imagen+Podadora"
    },
    {
        nombre: "Cadena de Sierra",
        precio: "10",
        imagen: "https://placehold.co/400x300/FFF3CD/856404?text=Imagen+Cadena+Sierra"
    },
    {
        nombre: "Rollo de Malla",
        precio: "25",
        imagen: "https://placehold.co/400x300/D4EDDA/155724?text=Imagen+Rollo+Malla"
    },
    {
        nombre: "Filtro de Aire",
        precio: "8",
        imagen: "https://placehold.co/400x300/CCE5FF/004085?text=Imagen+Filtro+Aire"
    },
    // Puedes añadir más productos aquí, por ejemplo:
    {
        nombre: "Producto Adicional 1",
        precio: "20",
        imagen: "https://placehold.co/400x300/F0F8FF/4682B4?text=Producto+Adicional+1"
    },
    {
        nombre: "Producto Adicional 2",
        precio: "35",
        imagen: "https://placehold.co/400x300/FAEBD7/A52A2A?text=Producto+Adicional+2"
    },
    {
        nombre: "Producto Adicional 3",
        precio: "150",
        imagen: "https://placehold.co/400x300/E6E6FA/4B0082?text=Producto+Adicional+3"
    },
    {
        nombre: "Producto Adicional 4",
        precio: "80",
        imagen: "https://placehold.co/400x300/F5FFFA/2F4F4F?text=Producto+Adicional+4"
    },
    {
        nombre: "Producto Adicional 5",
        precio: "45",
        imagen: "https://placehold.co/400x300/FFF0F5/C71585?text=Producto+Adicional+5"
    },
    {
        nombre: "Producto Adicional 6",
        precio: "60",
        imagen: "https://placehold.co/400x300/F0FFF0/3CB371?text=Producto+Adicional+6"
    },
    {
        nombre: "Producto Adicional 7",
        precio: "120",
        imagen: "https://placehold.co/400x300/F8F8FF/6A5ACD?text=Producto+Adicional+7"
    },
    {
        nombre: "Producto Adicional 8",
        precio: "95",
        imagen: "https://placehold.co/400x300/FFFAF0/D2B48C?text=Producto+Adicional+8"
    },
    {
        nombre: "Producto Adicional 9",
        precio: "70",
        imagen: "https://placehold.co/400x300/F0FFFF/AFEEEE?text=Producto+Adicional+9"
    },
    {
        nombre: "Producto Adicional 10",
        precio: "200",
        imagen: "https://placehold.co/400x300/F5F5DC/BDB76B?text=Producto+Adicional+10"
    },
    {
        nombre: "Producto Adicional 11",
        precio: "30",
        imagen: "https://placehold.co/400x300/F5F5F5/696969?text=Producto+Adicional+11"
    },
    {
        nombre: "Producto Adicional 12",
        precio: "55",
        imagen: "https://placehold.co/400x300/FFFAFA/8B0000?text=Producto+Adicional+12"
    },
    {
        nombre: "Producto Adicional 13",
        precio: "180",
        imagen: "https://placehold.co/400x300/F0FFF0/006400?text=Producto+Adicional+13"
    },
    {
        nombre: "Producto Adicional 14",
        precio: "110",
        imagen: "https://placehold.co/400x300/FDF5E6/D2691E?text=Producto+Adicional+14"
    },
    {
        nombre: "Producto Adicional 15",
        precio: "75",
        imagen: "https://placehold.co/400x300/F5F5DC/8B4513?text=Producto+Adicional+15"
    },
    {
        nombre: "Producto Adicional 16",
        precio: "90",
        imagen: "https://placehold.co/400x300/FFFAF0/CD853F?text=Producto+Adicional+16"
    },
    {
        nombre: "Producto Adicional 17",
        precio: "130",
        imagen: "https://placehold.co/400x300/F0FFFF/008B8B?text=Producto+Adicional+17"
    },
    {
        nombre: "Producto Adicional 18",
        precio: "65",
        imagen: "https://placehold.co/400x300/F8F8FF/483D8B?text=Producto+Adicional+18"
    },
    {
        nombre: "Producto Adicional 19",
        precio: "40",
        imagen: "https://placehold.co/400x300/FFFACD/DAA520?text=Producto+Adicional+19"
    },
    {
        nombre: "Producto Adicional 20",
        precio: "100",
        imagen: "https://placehold.co/400x300/F5DEB3/DEB887?text=Producto+Adicional+20"
    },
    {
        nombre: "Producto Adicional 21",
        precio: "25",
        imagen: "https://placehold.co/400x300/E0FFFF/00CED1?text=Producto+Adicional+21"
    },
    {
        nombre: "Producto Adicional 22",
        precio: "70",
        imagen: "https://placehold.co/400x300/F0F8FF/4682B4?text=Producto+Adicional+22"
    },
    {
        nombre: "Producto Adicional 23",
        precio: "140",
        imagen: "https://placehold.co/400x300/FAEBD7/A52A2A?text=Producto+Adicional+23"
    },
    {
        nombre: "Producto Adicional 24",
        precio: "90",
        imagen: "https://placehold.co/400x300/E6E6FA/4B0082?text=Producto+Adicional+24"
    },
    {
        nombre: "Producto Adicional 25",
        precio: "50",
        imagen: "https://placehold.co/400x300/F5FFFA/2F4F4F?text=Producto+Adicional+25"
    },
    {
        nombre: "Producto Adicional 26",
        precio: "85",
        imagen: "https://placehold.co/400x300/FFF0F5/C71585?text=Producto+Adicional+26"
    },
    {
        nombre: "Producto Adicional 27",
        precio: "115",
        imagen: "https://placehold.co/400x300/F0FFF0/3CB371?text=Producto+Adicional+27"
    },
    {
        nombre: "Producto Adicional 28",
        precio: "170",
        imagen: "https://placehold.co/400x300/F8F8FF/6A5ACD?text=Producto+Adicional+28"
    },
    {
        nombre: "Producto Adicional 29",
        precio: "60",
        imagen: "https://placehold.co/400x300/FFFAF0/D2B48C?text=Producto+Adicional+29"
    },
    {
        nombre: "Producto Adicional 30",
        precio: "95",
        imagen: "https://placehold.co/400x300/F0FFFF/AFEEEE?text=Producto+Adicional+30"
    },
    {
        nombre: "Producto Adicional 31",
        precio: "210",
        imagen: "https://placehold.co/400x300/F5F5DC/BDB76B?text=Producto+Adicional+31"
    },
    {
        nombre: "Producto Adicional 32",
        precio: "40",
        imagen: "https://placehold.co/400x300/F5F5F5/696969?text=Producto+Adicional+32"
    },
    {
        nombre: "Producto Adicional 33",
        precio: "75",
        imagen: "https://placehold.co/400x300/FFFAFA/8B0000?text=Producto+Adicional+33"
    },
    {
        nombre: "Producto Adicional 34",
        precio: "190",
        imagen: "https://placehold.co/400x300/F0FFF0/006400?text=Producto+Adicional+34"
    },
    {
        nombre: "Producto Adicional 35",
        precio: "125",
        imagen: "https://placehold.co/400x300/FDF5E6/D2691E?text=Producto+Adicional+35"
    },
    {
        nombre: "Producto Adicional 36",
        precio: "80",
        imagen: "https://placehold.co/400x300/F5F5DC/8B4513?text=Producto+Adicional+36"
    },
    {
        nombre: "Producto Adicional 37",
        precio: "100",
        imagen: "https://placehold.co/400x300/FFFAF0/CD853F?text=Producto+Adicional+37"
    },
    {
        nombre: "Producto Adicional 38",
        precio: "150",
        imagen: "https://placehold.co/400x300/F0FFFF/008B8B?text=Producto+Adicional+38"
    },
    {
        nombre: "Producto Adicional 39",
        precio: "70",
        imagen: "https://placehold.co/400x300/F8F8FF/483D8B?text=Producto+Adicional+39"
    },
    {
        nombre: "Producto Adicional 40",
        precio: "50",
        imagen: "https://placehold.co/400x300/FFFACD/DAA520?text=Producto+Adicional+40"
    },
    {
        nombre: "Producto Adicional 41",
        precio: "110",
        imagen: "https://placehold.co/400x300/F5DEB3/DEB887?text=Producto+Adicional+41"
    },
    {
        nombre: "Producto Adicional 42",
        precio: "30",
        imagen: "https://placehold.co/400x300/E0FFFF/00CED1?text=Producto+Adicional+42"
    },
    {
        nombre: "Producto Adicional 43",
        precio: "80",
        imagen: "https://placehold.co/400x300/F0F8FF/4682B4?text=Producto+Adicional+43"
    },
    {
        nombre: "Producto Adicional 44",
        precio: "160",
        imagen: "https://placehold.co/400x300/FAEBD7/A52A2A?text=Producto+Adicional+44"
    },
    {
        nombre: "Producto Adicional 45",
        precio: "100",
        imagen: "https://placehold.co/400x300/E6E6FA/4B0082?text=Producto+Adicional+45"
    },
    {
        nombre: "Producto Adicional 46",
        precio: "60",
        imagen: "https://placehold.co/400x300/F5FFFA/2F4F4F?text=Producto+Adicional+46"
    },
    {
        nombre: "Producto Adicional 47",
        precio: "90",
        imagen: "https://placehold.co/400x300/FFF0F5/C71585?text=Producto+Adicional+47"
    },
    {
        nombre: "Producto Adicional 48",
        precio: "130",
        imagen: "https://placehold.co/400x300/F0FFF0/3CB371?text=Producto+Adicional+48"
    },
    {
        nombre: "Producto Adicional 49",
        precio: "180",
        imagen: "https://placehold.co/400x300/F8F8FF/6A5ACD?text=Producto+Adicional+49"
    },
    {
        nombre: "Producto Adicional 50",
        precio: "70",
        imagen: "https://placehold.co/400x300/FFFAF0/D2B48C?text=Producto+Adicional+50"
    },
    {
        nombre: "Producto Adicional 51",
        precio: "105",
        imagen: "https://placehold.co/400x300/F0FFFF/AFEEEE?text=Producto+Adicional+51"
    },
    {
        nombre: "Producto Adicional 52",
        precio: "220",
        imagen: "https://placehold.co/400x300/F5F5DC/BDB76B?text=Producto+Adicional+52"
    },
    {
        nombre: "Producto Adicional 53",
        precio: "35",
        imagen: "https://placehold.co/400x300/F5F5F5/696969?text=Producto+Adicional+53"
    },
    {
        nombre: "Producto Adicional 54",
        precio: "60",
        imagen: "https://placehold.co/400x300/FFFAFA/8B0000?text=Producto+Adicional+54"
    },
    {
        nombre: "Producto Adicional 55",
        precio: "200",
        imagen: "https://placehold.co/400x300/F0FFF0/006400?text=Producto+Adicional+55"
    },
    {
        nombre: "Producto Adicional 56",
        precio: "135",
        imagen: "https://placehold.co/400x300/FDF5E6/D2691E?text=Producto+Adicional+56"
    },
    {
        nombre: "Producto Adicional 57",
        precio: "85",
        imagen: "https://placehold.co/400x300/F5F5DC/8B4513?text=Producto+Adicional+57"
    },
    {
        nombre: "Producto Adicional 58",
        precio: "105",
        imagen: "https://placehold.co/400x300/FFFAF0/CD853F?text=Producto+Adicional+58"
    },
    {
        nombre: "Producto Adicional 59",
        precio: "160",
        imagen: "https://placehold.co/400x300/F0FFFF/008B8B?text=Producto+Adicional+59"
    },
    {
        nombre: "Producto Adicional 60",
        precio: "75",
        imagen: "https://placehold.co/400x300/F8F8FF/6A5ACD?text=Producto+Adicional+60"
    },
    {
        nombre: "Producto Adicional 61",
        precio: "55",
        imagen: "https://placehold.co/400x300/FFFACD/DAA520?text=Producto+Adicional+61"
    },
    {
        nombre: "Producto Adicional 62",
        precio: "120",
        imagen: "https://placehold.co/400x300/F5DEB3/DEB887?text=Producto+Adicional+62"
    },
    {
        nombre: "Producto Adicional 63",
        precio: "45",
        imagen: "https://placehold.co/400x300/E0FFFF/00CED1?text=Producto+Adicional+63"
    },
    {
        nombre: "Producto Adicional 64",
        precio: "90",
        imagen: "https://placehold.co/400x300/F0F8FF/4682B4?text=Producto+Adicional+64"
    },
    {
        nombre: "Producto Adicional 65",
        precio: "170",
        imagen: "https://placehold.co/400x300/FAEBD7/A52A2A?text=Producto+Adicional+65"
    },
    {
        nombre: "Producto Adicional 66",
        precio: "110",
        imagen: "https://placehold.co/400x300/E6E6FA/4B0082?text=Producto+Adicional+66"
    },
    {
        nombre: "Producto Adicional 67",
        precio: "65",
        imagen: "https://placehold.co/400x300/F5FFFA/2F4F4F?text=Producto+Adicional+67"
    },
    {
        nombre: "Producto Adicional 68",
        precio: "95",
        imagen: "https://placehold.co/400x300/FFF0F5/C71585?text=Producto+Adicional+68"
    },
    {
        nombre: "Producto Adicional 69",
        precio: "140",
        imagen: "https://placehold.co/400x300/F0FFF0/3CB371?text=Producto+Adicional+69"
    },
    {
        nombre: "Producto Adicional 70",
        precio: "190",
        imagen: "https://placehold.co/400x300/F8F8FF/6A5ACD?text=Producto+Adicional+70"
    },
    {
        nombre: "Producto Adicional 71",
        precio: "80",
        imagen: "https://placehold.co/400x300/FFFAF0/D2B48C?text=Producto+Adicional+71"
    },
    {
        nombre: "Producto Adicional 72",
        precio: "115",
        imagen: "https://placehold.co/400x300/F0FFFF/AFEEEE?text=Producto+Adicional+72"
    },
    {
        nombre: "Producto Adicional 73",
        precio: "230",
        imagen: "https://placehold.co/400x300/F5F5DC/BDB76B?text=Producto+Adicional+73"
    },
    {
        nombre: "Producto Adicional 74",
        precio: "40",
        imagen: "https://placehold.co/400x300/F5F5F5/696969?text=Producto+Adicional+74"
    },
    {
        nombre: "Producto Adicional 75",
        precio: "65",
        imagen: "https://placehold.co/400x300/FFFAFA/8B0000?text=Producto+Adicional+75"
    },
    {
        nombre: "Producto Adicional 76",
        precio: "210",
        imagen: "https://placehold.co/400x300/F0FFF0/006400?text=Producto+Adicional+76"
    },
    {
        nombre: "Producto Adicional 77",
        precio: "145",
        imagen: "https://placehold.co/400x300/FDF5E6/D2691E?text=Producto+Adicional+77"
    },
    {
        nombre: "Producto Adicional 78",
        precio: "90",
        imagen: "https://placehold.co/400x300/F5F5DC/8B4513?text=Producto+Adicional+78"
    },
    {
        nombre: "Producto Adicional 79",
        precio: "110",
        imagen: "https://placehold.co/400x300/FFFAF0/CD853F?text=Producto+Adicional+79"
    },
    {
        nombre: "Producto Adicional 80",
        precio: "170",
        imagen: "https://placehold.co/400x300/F0FFFF/008B8B?text=Producto+Adicional+80"
    },
    {
        nombre: "Producto Adicional 81",
        precio: "85",
        imagen: "https://placehold.co/400x300/F8F8FF/483D8B?text=Producto+Adicional+81"
    },
    {
        nombre: "Producto Adicional 82",
        precio: "60",
        imagen: "https://placehold.co/400x300/FFFACD/DAA520?text=Producto+Adicional+82"
    },
    {
        nombre: "Producto Adicional 83",
        precio: "130",
        imagen: "https://placehold.co/400x300/F5DEB3/DEB887?text=Producto+Adicional+83"
    },
    {
        nombre: "Producto Adicional 84",
        precio: "50",
        imagen: "https://placehold.co/400x300/E0FFFF/00CED1?text=Producto+Adicional+84"
    },
    {
        nombre: "Producto Adicional 85",
        precio: "100",
        imagen: "https://placehold.co/400x300/F0F8FF/4682B4?text=Producto+Adicional+85"
    },
    {
        nombre: "Producto Adicional 86",
        precio: "180",
        imagen: "https://placehold.co/400x300/FAEBD7/A52A2A?text=Producto+Adicional+86"
    },
    {
        nombre: "Producto Adicional 87",
        precio: "120",
        imagen: "https://placehold.co/400x300/E6E6FA/4B0082?text=Producto+Adicional+87"
    },
    {
        nombre: "Producto Adicional 88",
        precio: "70",
        imagen: "https://placehold.co/400x300/F5FFFA/2F4F4F?text=Producto+Adicional+88"
    },
    {
        nombre: "Producto Adicional 89",
        precio: "100",
        imagen: "https://placehold.co/400x300/FFF0F5/C71585?text=Producto+Adicional+89"
    },
    {
        nombre: "Producto Adicional 90",
        precio: "150",
        imagen: "https://placehold.co/400x300/F0FFF0/3CB371?text=Producto+Adicional+90"
    },
    {
        nombre: "Producto Adicional 91",
        precio: "200",
        imagen: "https://placehold.co/400x300/F8F8FF/6A5ACD?text=Producto+Adicional+91"
    },
    {
        nombre: "Producto Adicional 92",
        precio: "90",
        imagen: "https://placehold.co/400x300/FFFAF0/D2B48C?text=Producto+Adicional+92"
    },
    {
        nombre: "Producto Adicional 93",
        precio: "125",
        imagen: "https://placehold.co/400x300/F0FFFF/AFEEEE?text=Producto+Adicional+93"
    },
    {
        nombre: "Producto Adicional 94",
        precio: "240",
        imagen: "https://placehold.co/400x300/F5F5DC/BDB76B?text=Producto+Adicional+94"
    },
    {
        nombre: "Producto Adicional 95",
        precio: "45",
        imagen: "https://placehold.co/400x300/F5F5F5/696969?text=Producto+Adicional+95"
    },
    {
        nombre: "Producto Adicional 96",
        precio: "70",
        imagen: "https://placehold.co/400x300/FFFAFA/8B0000?text=Producto+Adicional+96"
    },
    {
        nombre: "Producto Adicional 97",
        precio: "220",
        imagen: "https://placehold.co/400x300/F0FFF0/006400?text=Producto+Adicional+97"
    },
    {
        nombre: "Producto Adicional 98",
        precio: "155",
        imagen: "https://placehold.co/400x300/FDF5E6/D2691E?text=Producto+Adicional+98"
    },
    {
        nombre: "Producto Adicional 99",
        precio: "95",
        imagen: "https://placehold.co/400x300/F5F5DC/8B4513?text=Producto+Adicional+99"
    },
    {
        nombre: "Producto Adicional 100",
        precio: "120",
        imagen: "https://placehold.co/400x300/FFFAF0/CD853F?text=Producto+Adicional+100"
    },
];
