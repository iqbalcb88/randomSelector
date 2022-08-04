const textarea = document.getElementById('textarea');
const choices = document.getElementById('tags');
// console.log(tags);

textarea.focus();

textarea.addEventListener('keyup', function (e) {
  if (e.target.value.length <= 1) {
    return; // alert('Write your choices in given text box');
  }

  createTags(e);

  if (e.key === 'Enter') {
    // console.log(typeof e.target.value, e.target.value.length);
    setTimeout(() => {
      e.target.value = '';
    }, 100);

    randomSelect();
  }
});

const createTags = (e) => {
  let tags = e.target.value
    .split(',')
    .filter((tag) => tag != '')
    .map((tag) => tag.trim());
  console.log(tags);
  choices.innerHTML = '';
  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.textContent = tag;
    choices.append(tagEl);
  });
};
// 1,3,5,6,7,8,9,8,7,6,5,4
const randomSelect = () => {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highlightedTag(randomTag);
    setTimeout(() => {
      unHighlightedTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightedTag(randomTag);
    }, 100);
  }, times * 100);
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag');
  const selectedTag = Math.floor(Math.random() * tags.length);
  // console.log(selectedTag);
  return tags[selectedTag];
};

const highlightedTag = (tag) => {
  tag.classList.add('highlighted');
};
const unHighlightedTag = (tag) => {
  tag.classList.remove('highlighted');
};
