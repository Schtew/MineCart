package com.dyno;

import java.sql.*;

public class test {
    public static void main(String[] args) throws SQLException {
        Connection conn = DB.getConn();
        Statement s = conn.createStatement();
        String req = "SELECT COUNT(*) FROM users WHERE uuid='7777777777'";
        ResultSet r = s.executeQuery(req);
        r.next();
        if (r.getInt(1) == 0) {
            System.out.println("User not found");
        } else {
            System.out.println("User found");
        }
        DB.closeConn();
    }
}
