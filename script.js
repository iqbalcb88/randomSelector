const textarea = document.getElementById('textarea');
// console.log(textarea);

const tags = document.getElementById('tags');

textarea.focus();

textarea.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    createTag(e.target.value);

    setTimeout(() => {
      e.target.value = '';
    }, 10);

    const interval = setInterval(() => {
      const randomTag = randomPick();
      tagHighlight(randomTag);
      setTimeout(() => {
        tagUnHighlight(randomTag);
      }, 100);
    }, 100);
    setTimeout(() => {
      clearInterval(interval);
      const selectedTag = randomPick();
      tagHighlight(selectedTag);
    }, 3000);
  }
});

const tagUnHighlight = (tag) => {
  tag.classList.remove('highlighted');
};

const tagHighlight = (tag) => {
  tag.classList.add('highlighted');
};

const randomPick = () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
  // console.log(tags);
};

const createTag = (event) => {
  tags.innerHTML = '';
  const choices = event
    .split(',')
    .map((e) => e.trim())
    .filter((e) => e !== '');
  /* .filter((tag) => tag !== ' ')
    .map((tag) => tag.trim()) */
  //  console.log(choices);
  choices.forEach((element) => {
    const tag = document.createElement('span');
    tag.classList.add('tag');
    tag.textContent = element;
    tags.append(tag);
  });
};
