package com.dyno;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.github.stefvanschie.inventoryframework.gui.GuiItem;
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui;
import com.github.stefvanschie.inventoryframework.pane.OutlinePane;
import com.github.stefvanschie.inventoryframework.pane.Pane.Priority;

import org.bukkit.Material;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;

public class GUIs {
    
    public static ChestGui getMainGUI() throws SQLException {
        ChestGui gui = new ChestGui(3, "Navigator");

        gui.setOnGlobalClick(event -> event.setCancelled(true));

        OutlinePane background = new OutlinePane(0, 0, 9, 3, Priority.LOWEST);
        background.addItem(new GuiItem(new ItemStack(Material.BLACK_STAINED_GLASS_PANE)));
        background.setRepeat(true);

        gui.addPane(background);
                
        OutlinePane navigationPane = new OutlinePane(3, 1, 3, 1);

        ItemStack sword = new ItemStack(Material.DIAMOND_SWORD);
        ItemMeta swordMeta = sword.getItemMeta();
        swordMeta.setDisplayName("Shop");
        sword.setItemMeta(swordMeta);

        Connection conn = DB.getConn();
        Statement s = conn.createStatement();
        
        navigationPane.addItem(new GuiItem(sword, event -> {
            String req = "UPDATE users SET curr_quest = 1 WHERE uuid='" + event.getWhoClicked().getUniqueId() + "'";
            try {
                s.execute(req);
                QuestManager.questUpdate(event.getWhoClicked().getUniqueId());
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }));

        ItemStack beacon = new ItemStack(Material.BEACON);
        ItemMeta beaconMeta = beacon.getItemMeta();
        beaconMeta.setDisplayName("Spawn");
        beacon.setItemMeta(beaconMeta);

        navigationPane.addItem(new GuiItem(beacon, event -> {
            //navigate to spawn
        }));

        ItemStack bed = new ItemStack(Material.RED_BED);
        ItemMeta bedMeta = bed.getItemMeta();
        bedMeta.setDisplayName("Home");
        bed.setItemMeta(bedMeta);

        navigationPane.addItem(new GuiItem(bed, event -> {
            //navigate to home
        }));

        gui.addPane(navigationPane);
        return gui;
    }
}
