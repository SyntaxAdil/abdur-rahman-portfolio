// import project from "@/data/project.json"

export const getProject = async () => {
  const res = await fetch(
    `https://app-portfolio-manager.vercel.app/api/project/${process.env.PM_USER_ID}`,
  );
  const data = await res.json();
  return data.data;
};
