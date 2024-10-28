let api = "http://localhost:3000/";
export const viewButton = async () => {
    let images;
    images = await fetch(api + 'banners').then(res => {
        return res.json();
    })
        .then(data => {
        return data;
    });
    let fillButtons = "";
    let i = 0;
    images.forEach(image => {
        fillButtons +=
            `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class="${i == 0 ? 'active' : ''}" aria-label="Slide ${i + 1}">
            </button>`;
        i++;
    });
    return fillButtons;
};
export const viewBanner = async () => {
    let bannerImages;
    bannerImages = await fetch(api + 'banners').then(res => {
        return res.json();
    })
        .then(data => {
        return data;
    });
    let fillImages = "";
    let i = 0;
    bannerImages.forEach(image => {
        fillImages +=
            `<div class="carousel-item ${i == 0 ? 'active' : ''}">
                <img src="images/${image.name}" class="d-block w-100" alt="...">
            </div>`;
        i++;
    });
    return fillImages;
};
export const viewType = async () => {
    let typePro;
    let str = "";
    typePro = await fetch(api + 'type').then(res => {
        return res.json();
    }).then(data => {
        return data;
    });
    typePro.forEach(t => {
        str +=
            `<div class="feat">
					<i class="${t.icon}"></i>
					<h3>${t.name}</h3>
            </div>`;
    });
    return str;
};
export const viewManufacturer = async () => {
    let manufacturers;
    let str = "";
    manufacturers = await fetch(api + 'manufacturers').then(res => {
        return res.json();
    }).then(data => {
        return data;
    });
    manufacturers.forEach(m => {
        str +=
            `<div class="feat">
					<img src="images/${m.image}" alt="">
            </div>`;
    });
    return str;
};
export const viewPagi = async () => {
    let phones;
    let pagi = `<li class="page-item" onclick="prev()">
                <a class="page-link" tabindex="-1" aria-disabled="true">Previous</a>
            </li>`;
    phones = await fetch(api + 'products').then(res => {
        return res.json();
    }).then(data => {
        return data;
    });
    let totalPage = Math.ceil(phones.length / 6);
    document.getElementById("pageNum").setAttribute("value", totalPage.toString());
    for (let i = 1; i <= Math.ceil(phones.length / 6); i++) {
        pagi +=
            `<li class="page-item" onclick="changePro(${i})">
                <a class="page-link" id="pagiValue">${i}</a>
            </li>`;
    }
    pagi +=
        `<li class="page-item" onclick="next()">
                <a class="page-link">Next</a>
            </li>`;
    return pagi;
};
export const getProducts = async (pageNum) => {
    let phones;
    let str = "";
    phones = await fetch(api + `products?_start=${(pageNum - 1) * 6}&_limit=6`).then(res => {
        return res.json();
    }).then(data => {
        return data;
    });
    phones.forEach(p => {
        str +=
            `<div class="card">
                <img src="images/${p.image}" alt=""/>
                <div class="info">
                    <h3 style="text-align: center">${p.name}</h3>
                    <p style="text-align: center">
                        ${p.price.toLocaleString('vi-VN')}đ
                    </p>
                </div>
            </div>`;
    });
    return str;
};
const getRecent = async (typeId) => {
    let result;
    result = await fetch(api + `products?typeId=${typeId}&_start=0&_limit=4&_sort=-createDate`).then(res => {
        return res.json();
    }).then(data => {
        return data;
    });
    return result;
};
export const recentLaptop = async () => {
    let laptops;
    let str = "";
    laptops = await getRecent(3);
    let index = 0;
    laptops.forEach(p => {
        if (index % 2 == 0) {
            str += `<div class="col">`;
        }
        str +=
            `<div class="srv">
                <div class="card">
                    <img src="images/${p.image}" alt="" style="height: 150px"/>
                    <div class="info">
                        <h3 style="font-size: 1rem; text-align: center">${p.name}</h3>
                        <p style="text-align: center">
                            ${p.price.toLocaleString('vi-VN')}đ
                        </p>
                    </div>
                </div>
            </div>`;
        if (index % 2 != 0) {
            str += `</div>`;
        }
        index++;
    });
    str +=
        `<div class="col">
            <div class="image image-column">
                <img src="images/avatar-laptop.png" alt="" />
            </div>
        </div>`;
    return str;
};
export const recentPhone = async () => {
    let phones;
    let str = "";
    phones = await getRecent(2);
    let index = 0;
    str +=
        `<div class="col">
            <div class="image image-column">
                <img src="images/avatar-phone.png" alt="" />
            </div>
        </div>`;
    phones.forEach(p => {
        if (index % 2 == 0) {
            str += `<div class="col">`;
        }
        str +=
            `<div class="srv">
                <div class="card">
                    <img src="images/${p.image}" alt="" style="height: 150px"/>
                    <div class="info">
                        <h3 style="font-size: 1rem; text-align: center">${p.name}</h3>
                        <p style="text-align: center">
                            ${p.price.toLocaleString('vi-VN')}đ
                        </p>
                    </div>
                </div>
            </div>`;
        if (index % 2 != 0) {
            str += `</div>`;
        }
        index++;
    });
    return str;
};
export const recentTV = async () => {
    let tv;
    let str = "";
    tv = await getRecent(1);
    let index = 0;
    tv.forEach(p => {
        if (index % 2 == 0) {
            str += `<div class="col">`;
        }
        str +=
            `<div class="srv">
                <div class="card">
                    <img src="images/${p.image}" alt="" style="height: 150px"/>
                    <div class="info">
                        <h3 style="font-size: 1rem; text-align: center">${p.name}</h3>
                        <p style="text-align: center">
                            ${p.price.toLocaleString('vi-VN')}đ
                        </p>
                    </div>
                </div>
            </div>`;
        if (index % 2 != 0) {
            str += `</div>`;
        }
        index++;
    });
    str +=
        `<div class="col">
            <div class="image image-column">
                <img src="images/avatar-tv.png" alt="" />
            </div>
        </div>`;
    return str;
};
export const recentProduct = async () => {
    let phones;
    let str = "";
    phones = await fetch(api + `products?_sort=-createDate`).then(res => {
        return res.json();
    }).then(data => {
        return data;
    });
    phones.forEach(p => {
        str +=
            `<div class="col-md-4" style="margin-bottom: 15px">
                    <div class="card">
                        <img src="images/${p.image}" class="card-img-top" alt="Service 1" style="height: 200px;">
                        <div class="card-body">
                            <h5 class="card-title">${p.name}</h5>
                            <p class="card-text">${p.price} - ${p.createDate}</p>
                        </div>
                    </div>
            </div>`;
    });
    return str;
};
