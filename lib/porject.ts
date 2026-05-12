// import project from "@/data/project.json"

export const getProject = async () => {
  const res = await fetch(
    `https://app-portfolio-manager.vercel.app/api/project/${process.env.PM_USER_ID}`,
    { next: { revalidate: 60 } },
  );
  const data = await res.json();
  console.log(data.data);
  return data.data.sort(
    (
      a: { isFeatured: boolean; createdAt: string },
      b: { isFeatured: boolean; createdAt: string },
    ) => {
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;

      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    },
  );
};
