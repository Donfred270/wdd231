const currentYear = document.querySelector("#currentyear");
currentYear.innerHTML = new Date().getFullYear();

document.getElementById('last-modified').textContent = document.lastModified;

document.addEventListener('DOMContentLoaded', () => {
  const gridBtn = document.querySelector("#grid");
  const listBtn = document.querySelector("#list");
  const display = document.querySelector("article");

  async function fetchMembers() {
    try {
      const res = await fetch('data/members.json');
      if (!res.ok) throw new Error('Failed to fetch members');
      return await res.json();
    } catch (err) {
      display.innerHTML = '<p style="color:red">Could not load members.</p>';
      return [];
    }
  }

  function renderMembers(members) {
    display.innerHTML = '';
    members.forEach(member => {
      display.innerHTML += `
        <div class="directory__card">
          <div class="directory__logo">
            <img src="images/${member.image}" alt="${member.name} logo" style="max-width:80px;max-height:80px;border-radius:8px;object-fit:cover;">
          </div>
          <div class="directory__info">
            <strong>${member.name}</strong>
            <p>${member.address}<br>${member.phone}<br><a href="${member.website}" target="_blank">${member.website.replace('https://','')}</a></p>
            <span class="membership-level level-${member.membershipLevel}">
              ${member.membershipLevel === 3 ? 'Gold' : member.membershipLevel === 2 ? 'Silver' : 'Member'}
            </span>
          </div>
        </div>
      `;
    });
  }

  gridBtn.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
    gridBtn.classList.add("active");
    listBtn.classList.remove("active");
  });

  listBtn.addEventListener("click", showList);

  function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
    listBtn.classList.add("active");
    gridBtn.classList.remove("active");
  }

  // Initial load
  fetchMembers().then(members => {
    renderMembers(members);
  });
});