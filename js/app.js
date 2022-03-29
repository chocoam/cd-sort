$(function() {
    var active = [];
    var allArr = [];
    var showClass,
        href,
        param = '';
    var activeClass = 'active',
        sortControl = $('.sortControl'),
        sortTarget = $('.itemList > .item'),
        groupLength = 3;

    if (location.search) {
        var onload = location.search.slice(1).replace(/group.=/g, "").split('?');
        var defArr = [];
        for (var i = 0; i < onload.length; i++) {
            var filter = onload[i].split(',');
            defArr.push(filter);
        }
        var defCheck = '#' + defArr.join(',').replace(/,/g, ',#');
        $(defCheck).prop('checked', 'checked');
        defArr = '.' + defArr.join('|.').replace(/,/g, ',.');
        defArr = defArr.split('|');
        showClass = sortTarget;
        for (var i = 0; i < defArr.length; i++) {
            var filter = defArr[i];
            showClass = showClass.filter(filter);
        }
        showClass.addClass(activeClass);
        sortTarget.each(function() {
            if ($(this).hasClass(activeClass)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

    } else {
        sortTarget.find('.item').addClass('active');
    }

    sortControl.find('input[type="checkbox"]').change(function() {
        active = [];
        allArr = [];
        param = '';
        for (i = 0; i < groupLength; i++) {
            var arr = [];
            var filterArr = [];
            if (sortControl.find('input[type="checkbox"][data-group="' + i + '"]:checked').length) {
                sortControl.find('input[type="checkbox"][data-group="' + i + '"]:checked').each(function() {
                    arr.push($(this).attr('id'));
                    filterArr.push('.' + $(this).attr('id'));
                });
            }
            active[i] = arr;
            if (filterArr.length) {
                allArr.push(filterArr);
            }
            param += (active[i].length) ? '?group' + i + '=' + active[i] : '';
        }

        showClass = sortTarget;

        if (allArr.length) {
            for (j = 0; j < allArr.length; j++) {
                var filter = allArr[j].join(',');
                showClass = showClass.filter(filter);
            }
        }

        if ($.isEmptyObject(param) !== true) {
            history.pushState(null, null, param);
        }
        if (sortControl.find('input[type="checkbox"]:checked').length) {
            sortTarget.removeClass(activeClass);
            showClass.addClass(activeClass);
            sortTarget.each(function() {
                if ($(this).hasClass(activeClass)) {
                    if (!$(this).is(':visible')) {
                        $(this).show().css({
                            'z-index': '1'
                        }).animate({
                            'z-index': '100'
                        }, {
                            duration: 300,
                            step: function(now) {
                                $(this).css({
                                    transform: 'scale(' + now / 100 + ')'
                                });
                            }
                        });
                    }
                } else {
                    $(this).css({
                        'z-index': '100'
                    }).animate({
                        'z-index': '0'
                    }, {
                        duration: 300,
                        step: function(now) {
                            $(this).css({
                                transform: 'scale(' + now * 0.01 + ')'
                            });
                        },
                        complete: function() {
                            $(this).hide();
                        }
                    });
                }
            });
        } else {
            sortTarget.show().addClass(activeClass).show().css({
                'z-index': '1'
            }).animate({
                'z-index': '100'
            }, {
                duration: 300,
                step: function(now) {
                    $(this).css({
                        transform: 'scale(' + now / 100 + ')'
                    });
                }
            });
            var defHref = location.href.replace(/\?.*$/, "");
            history.pushState(null, null, defHref);
        }
    });
});