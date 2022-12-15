class HeadAnimate
{
  constructor(head, _class, _classImportant, _classMaxImportant, doc, animLevel)
  {
    this.head = head;
    this.class = _class;
    this.classImportant = _classImportant;
    this.classMaxImportant = _classMaxImportant;
    this.animLevel = animLevel;
    this.doc = doc;
    this.maximize = false;
    this.active = true;
  }

  Init()
  {
    var headObj = this.doc.getElementsByClassName(this.head)[0];
    if (headObj == undefined)
      return;

    if (headObj.classList.contains(this.class)) headObj.classList.remove(this.class);

    this.doc.removeEventListener('scroll', isScrollHead);
    this.doc.addEventListener("scroll", isScrollHead.bind(null, this.head, this.class, this.doc, this.animLevel));

    window.scrollBy(0, 1);
    window.scrollBy(0, -1);

    function isScrollHead(head, _class, doc, animLevel)
    {
      var headObj = doc.getElementsByClassName(head)[0];
      if (headObj.length == 0) return;

      var panelHeight = parseInt(headObj.getAttribute('data-top'));
      if(isNaN(panelHeight))
      {
        headObj.dataset.top = 0;
        panelHeight = 0;
      }
      var top = window.pageYOffset || document.documentElement.scrollTop;
      var marginTop = parseInt($(headObj).css('top'));

      if (top > marginTop)
      {
        headObj.style.marginTop = (-marginTop + panelHeight) + 'px';
        if (!headObj.classList.contains(_class))
        {
          headObj.classList.add(_class);
        }
      }
      else
      {
        headObj.style.marginTop = (-top + panelHeight) + 'px';
        if (!headObj.classList.contains('l-head__minimize-important'))
        {
          if (headObj.classList.contains(_class))
          {
            headObj.classList.remove(_class);
          }
        }
      }
    }
  }

  setMaximizeHeader()
  {
    var head = $('.l-head');
    if(head.length == 0) return;
    var panelHeight = parseInt(head[0].getAttribute('data-top'));
    head[0].classList.add('transition');
    head[0].style.marginTop = panelHeight + 'px';

    if (!this.maximize)
    {
      var headObj = this.doc.getElementsByClassName(this.head)[0];
      if (headObj.classList.contains(this.class))
      headObj.classList.remove(this.class);
      this.maximize = true;
    }
  }
  unsetMaximizeHeader()
  {
    var obj = $('.l-head');
    var transitionDuration = parseFloat(obj.css('transition-duration')) * 1000;
    if(obj.length == 0) return;

    setTimeout(function () {
      obj[0].classList.remove('transition');
    }, transitionDuration);

    if (this.maximize)
    {
      var headObj = this.doc.getElementsByClassName(this.head)[0];
      var html = document.documentElement;
      if (!headObj.classList.contains(this.class) && (html.offsetHeight > html.clientHeight))
      headObj.classList.add(this.class);
      this.maximize = false;
      window.scrollBy(0, 1);
      window.scrollBy(0, -1);
    }
  }
  isMinimized()
  {
    var headObj = this.doc.getElementsByClassName(this.head)[0];
    if (headObj.length == 0) return;

    if(headObj.classList.contains(this.classImportant))
    return true;
    else
    return false;
  }
  setActive(value)
  {
    this.active = value;
  }
  isActive()
  {
    return !this.active;
  }
}

export default HeadAnimate;
