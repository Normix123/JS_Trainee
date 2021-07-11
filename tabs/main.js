const tabs = document.getElementById('tabs');
const contents = document.querySelectorAll('.content');
const tabs_inside = document.getElementById('tabs_inside');
const contents_inside = document.querySelectorAll('.content_inside');


const changeTab = (el, tabs_) => {
    for (let i = 0; i < tabs_.childElementCount; i++)
    {
        tabs_.children[i].classList.remove('active');
    }

    el.classList.add('active');
}

const changeContent = (numToChange, contents_ ) => {
    for (let i = 0; i < contents_.length; i++)
    {
        contents_[i].classList.remove('active');
    }
    contents_[numToChange - 1].classList.add('active');
}

const eventClickTab = e => {
    const currentTub = e.target.dataset.btn;
    switch(e.target.classList[0])
    {   
        case 'tab-btn' :
            changeTab(e.target, tabs);
            changeContent(currentTub, contents);
            break;
        case 'tab-btn_inside' :
            changeTab(e.target, tabs_inside);
            changeContent(currentTub, contents_inside);
            break;
        default :
            console.log('Underfinded error');
    }
}

tabs.addEventListener('click', eventClickTab);
tabs_inside.addEventListener('click', eventClickTab);


