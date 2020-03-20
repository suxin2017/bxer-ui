
// 0 1 2 3 4 5 6
export function getDates(currentYear,currentMonth){
    const dates = [];
    let _date;

    // 这个月第一天
    _date = new Date(currentYear,currentMonth-1,1);
    // day = 0 代表周日
    const dayInWeek = _date.getDay() || 7;
    if(dayInWeek > 1){
        // 上月最后一天
        _date.setDate(0);
        const prevMonthDaysCount = _date.getDate();
        // 减去当前一天 减去一次循环
        for(let i = dayInWeek - 1 - 1;i>=0;i--){
            dates.push({
                year:_date.getFullYear(),
                month:_date.getMonth(),
                day:prevMonthDaysCount - i,
                type:'prev'
            })
        }
    }

    _date = new Date(currentYear,currentMonth,0);
    const currentMonthDaysCount = _date.getDate();
    for (let i = 1; i<=currentMonthDaysCount;i++ ){
        dates.push({
            year:_date.getFullYear(),
            month:_date.getMonth(),
            day: i,
            type:'current'
        })
    }

    _date = new Date(currentYear,currentMonth,1);
    const nextMonthDayInWeek = _date.getDay() || 7;
    if(dates.length < 7 * 6){
        for (let i = 1; i<= 7 - nextMonthDayInWeek + 1;i++ ){
            dates.push({
                year:_date.getFullYear(),
                month:_date.getMonth(),
                day: i,
                type:'next'
            })
        }
    }
    return dates;
}



export function isEquel(prevItem,nextItem){
    if(prevItem == null || nextItem ==null)return false;
    if(prevItem.year !== nextItem.year)return false;
    if(prevItem.month !== nextItem.month)return false;
    if(prevItem.day !== nextItem.day)return false;
    return true;
}