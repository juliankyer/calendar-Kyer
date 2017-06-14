const items = [
  {
    start: '9:00AM',
    end: '10:30AM',
    id: 1
  },
  {
    start: '12:00PM',
    end: '1:30PM',
    id: 2
  },
  {
    start: '2:00PM',
    end: '4:00PM',
    id: 3
  }
];

const timeLine = {
  '9:00AM': 1,
  '9:30AM': 2,
  '10:00AM': 3,
  '10:30AM': 4,
  '11:00AM': 5,
  '11:30AM': 6,
  '12:00PM': 7,
  '12:30PM': 8,
  '1:00PM': 9,
  '1:30PM': 10,
  '2:00PM': 11,
  '2:30PM': 12,
  '3:00PM': 13,
  '3:30PM': 14,
  '4:00PM': 15,
  '4:30PM': 16,
  '5:00PM': 17,
  '5:30PM': 18,
  '6:00PM': 19,
  '6:30PM': 20,
  '7:00PM': 21,
  '7:30PM': 22,
  '8:00PM': 23,
  '8:30PM': 24,
  '9:00PM': 25
}

$(document).ready(() => {
  items.forEach(item => {
    let startRow = timeLine[item.start];
    let endRow = timeLine[item.end];
    
    $('.calendar-wrapper').append(`
      <div class="wide-card" id="item-${item.id}">
        <h3>Sample Item</h3>
        <p>Sample Location</h3>
      </div>
    `);
    
    $(`#item-${item.id}`).css({
      'grid-row': `${startRow}/${endRow}`
    });
  });
});