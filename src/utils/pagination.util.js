const { array } = require("joi");

class paginationService {
  constructor(requestData) {
    this._requestData = requestData;
    this._result = {};
    this._result.metadata = {};

    // Define the page and pagination rules
    if (!this._requestData.query.page) this._requestData.query.page = 1;
    if (!this._requestData.query.paginate) this._requestData.query.pageinate = 10;
    if (this._requestData.query.paginate > 50) this._requestData.query.pageinate = 50;
    if (this._requestData.query.paginate === 0) this._requestData.query.pageinate = 10;
    if (this._requestData.query.paginate === '') this._requestData.query.pageinate = 10;
    

    // Remove all numeric id
    if (this._requestData.queryRow) this._requestData.queryRow.map(row => delete row.id);
  }
  
  async paginateKnex() {
    // Calculate the number of page(s)
    const pageCount = Math.ceil(this._requestData.queryCount[0].totalRecordCount / parseInt(this._requestData.query.paginate));

    this._result.records = this._requestData.queryRow;
    this._result.metadata.totalRecordCount = this._requestData.queryCount[0].totalRecordCount;
    this._result.metadata.totalPageCount = pageCount;
    this._result.metadata.currentPage = parseInt(this._requestData.query.page);
    this._result.metadata.nextPage =
      parseInt(this._requestData.query.page) + 1 <= pageCount
        ? parseInt(this._requestData.query.page) + 1
        : 0;
    this._result.metadata.prevPage =
      parseInt(this._requestData.query.page) - 1 !== 0
        ? parseInt(this._requestData.query.page) - 1
        : 0;

    return this._result;
  }

  async paginateSequelize() {
    // check if the record count is an array or object due to GROUPBY queries
    this._requestData.result.count = typeof(this._requestData.result.count) === "object" 
    ? 
      this._requestData.result.count.length 
    : 
      this._requestData.result.count;

    // Calculate the number of page(s)
    const pageCount = Math.ceil(parseInt(this._requestData.result.count) / parseInt(this._requestData.query.paginate));

    this._result.records = this._requestData.result.rows;
    this._result.metadata.totalRecordCount = this._requestData.result.count;
    this._result.metadata.totalPageCount = pageCount;
    this._result.metadata.currentPage = parseInt(this._requestData.query.page);
    this._result.metadata.nextPage = parseInt(this._requestData.query.page) + 1 <= pageCount ? parseInt(this._requestData.query.page) + 1 : 0;
    this._result.metadata.prevPage = parseInt(this._requestData.query.page) - 1 !== 0 ? (parseInt(this._requestData.query.page) - 1) : 0;

    return this._result;
  }
}

module.exports = paginationService;