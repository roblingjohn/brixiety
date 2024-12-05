import React, { useEffect } from "react";

const Socials = () => {
  useEffect(() => {
    document.title = "Brixiety | Socials";
  });
  const items = [
    {
      website: "Donate at",
      url: "https://www.buymeacoffee.com/brixiety",
      name: "Buy Me a Coffee",
      specialClass: "font-weight-bold",
    },
    {
      website: "email",
      url: "mailto:brixiety.comic@gmail.com",
      name: "brixiety.comic@gmail.com",
    },
    {
      website: "Facebook",
      url: "https://www.facebook.com/brixiety",
      name: "brixiety",
    },
    {
      website: "Instagram",
      url: "https://www.instagram.com/brixiety.comic/",
      name: "@brixiety.comic",
      secondaryUrl: "https://www.instagram.com/john.brixiety/",
      secondaryName: "@john.brixiety",
      secondaryNote: "non-comic LEGO stuff",
    },
    {
      website: "Bluesky",
      url: "https://bsky.app/profile/brixiety.com",
      name: "@brixiety.com",
    },
    {
      website: "Reddit",
      url: "https://reddit.com/r/brixiety/",
      name: "/r/brixiety",
    },
    {
      website: "Imgur",
      url: "https://imgur.com/user/brixiety",
      name: "brixiety",
    },
    {
      website: "YouTube",
      url: "https://www.youtube.com/channel/UCSdVQTD0VmEh0bsws6H5Rag/",
      name: "Brixiety Studios",
      note: "coming eventually?",
    },
    {
      website: "Tumblr",
      url: "https://brixiety.tumblr.com/",
      name: "brixiety",
      note: "defunct",
      specialClass: "font-italic",
    },
    {
      website: "Twitter",
      url: "https://twitter.com/BrixietyComic",
      name: "@BrixietyComic",
      note: "defunct",
      specialClass: "font-italic",
    },
  ];
  return (
    <div className="container">
      <h1>Social Media</h1>
      <p>
        These are all the official social media pages for Brixiety. Anyone else
        claiming to be us is fake.
      </p>
      <ul className="pageText">
        {items.map((item) => (
          <li className={item?.specialClass || ""}>
            {item.website}:{" "}
            <a href={item.url} target="_blank" rel="noreferrer noopener">
              {item.name}
            </a>
            {item?.note && ` (${item.note})`}
            {item.secondaryUrl && (
              <span>
                {" | "}

                <a
                  href={item.secondaryUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {item.secondaryName}
                </a>
              </span>
            )}
            {item?.secondaryNote && ` (${item.secondaryNote})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
