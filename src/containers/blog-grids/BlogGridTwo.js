import React from "react";
import SectionTitleTwo from "../../components/ui/section-titles/SectionTitleTwo";
import blogGridData from "../../data/blog-grids/blog-grid-two.json";
import BlogGridTwoSingle from "../../components/blog-grids/BlogGridTwoSingle";

const BlogGridTwo = () => {
  return (
    <div className="dg__blog__area bg--white pb--140 pt--130">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* section title */}
            <SectionTitleTwo title="Latest News" />
          </div>
        </div>
        <div className="row mt--10">
          {blogGridData &&
            blogGridData.map((single, key) => {
              return <BlogGridTwoSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default BlogGridTwo;
