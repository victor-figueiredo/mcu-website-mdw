function createToken() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const clearSearchInput = (id: string) => {
  const input = document.getElementById(id) as HTMLInputElement;
  input.value = "";
};

interface MediaQueries {
  isDesktopxl: boolean;
  isDesktop: boolean;
  isTabletOrMobile: boolean;
  isMobile: boolean;
}

const verifyIndex = (index: number, conditions: MediaQueries) => {
  if (conditions.isTabletOrMobile) return index === 1;
  if (conditions.isDesktop) return index === 3;
  if (conditions.isDesktopxl) return index === 4;
  return index === 2;
};

const setSlidePerView = (conditions: MediaQueries) => {
  if (conditions.isMobile) return 1;
  if (conditions.isTabletOrMobile) return 2;
  if (conditions.isDesktop) return 4;
  if (conditions.isDesktopxl) return 5;
  return 3;
};

export { createToken, clearSearchInput, verifyIndex, setSlidePerView };
